#!/usr/bin/env node
/* Pre-launch YMYL + accessibility + link + JSON-LD + performance audit. No deps.
   Run:  npm run build && node scripts/audit.mjs            */
import fs from 'node:fs';
import path from 'node:path';

const DIST = path.resolve('dist');
if (!fs.existsSync(DIST)) { console.error('No dist/ — run `npm run build` first.'); process.exit(1); }

const allFiles = [];
(function walk(d){ for (const e of fs.readdirSync(d,{withFileTypes:true})){ const f=path.join(d,e.name);
  if(e.isDirectory()) walk(f); else allFiles.push(f); } })(DIST);
const htmlFiles = allFiles.filter(f=>f.endsWith('.html'));
const rel = (f)=>'/'+path.relative(DIST,f).replace(/\\/g,'/').replace(/index\.html$/,'');

let issues=0, pagesWithIssues=0; const brokenLinks=new Set(); let linksChecked=0;
let ldTotal=0, ldInvalid=0; const pageSizes=[];

function resolveLink(href){
  let h=href.split('#')[0].split('?')[0];
  if(!h.startsWith('/')||h.startsWith('//')) return null;
  if(h==='/') return 'index.html';
  const last=h.split('/').pop();
  if(last.includes('.')) return h.slice(1);
  return (h.replace(/\/$/,'')+'/index.html').slice(1);
}

for (const file of htmlFiles){
  const html=fs.readFileSync(file,'utf8');
  const url=rel(file);
  const problems=[];
  const noindex=/name="robots"[^>]*noindex/i.test(html);
  pageSizes.push({url, bytes: Buffer.byteLength(html)});

  // accessibility / correctness (all pages)
  if(!/<html[^>]*\blang=/i.test(html)) problems.push('missing <html lang>');
  if(!/name="viewport"/i.test(html)) problems.push('missing viewport meta');
  const noAlt=(html.match(/<img\b[^>]*>/gi)||[]).filter(t=>!/\balt=/i.test(t)).length;
  if(noAlt) problems.push(`${noAlt} <img> without alt`);

  // heading order within <main>
  const main=(html.match(/<main[\s\S]*?<\/main>/i)||[''])[0];
  const heads=[...main.matchAll(/<h([1-6])[\s>]/gi)].map(m=>+m[1]);
  let prev=0;
  for(const lvl of heads){ if(prev && lvl>prev+1){ problems.push(`heading jumps h${prev}->h${lvl}`); break; } prev=lvl; }

  // duplicate ids
  const ids=[...html.matchAll(/\sid="([^"]+)"/gi)].map(m=>m[1]);
  const dups=[...new Set(ids.filter((v,i)=>ids.indexOf(v)!==i))];
  if(dups.length) problems.push(`duplicate id(s): ${dups.slice(0,3).join(', ')}`);

  // form controls need a label
  const forSet=new Set([...html.matchAll(/\bfor="([^"]+)"/gi)].map(m=>m[1]));
  for(const m of html.matchAll(/<(input|select|textarea)\b([^>]*)>/gi)){
    const attrs=m[2];
    const type=(attrs.match(/\btype="([^"]+)"/i)||[])[1]||'text';
    if(['hidden','submit','button','reset','image'].includes(type)) continue;
    if(/\b(aria-label|aria-labelledby|title)=/i.test(attrs)) continue;
    const id=(attrs.match(/\bid="([^"]+)"/i)||[])[1];
    if(id && forSet.has(id)) continue;
    const back=html.slice(Math.max(0,m.index-220),m.index);
    if(back.lastIndexOf('<label')>back.lastIndexOf('</label>')) continue; // wrapped in a label
    problems.push('form control without a label'); break;
  }

  // SEO (indexable only)
  if(!noindex){
    const title=(html.match(/<title>([\s\S]*?)<\/title>/i)||[])[1];
    const titlePart=title?title.split(' — ')[0]:'';
    if(!title) problems.push('missing <title>'); else if(titlePart.length>60) problems.push(`title part long (${titlePart.length})`);
    const md=(html.match(/<meta\s+name="description"\s+content="([^"]*)"/i)||[])[1];
    if(md==null) problems.push('missing meta description'); else if(md.length<50||md.length>165) problems.push(`meta desc length ${md.length}`);
    const h1=(html.match(/<h1[\s>]/gi)||[]).length;
    if(h1!==1) problems.push(`h1 count = ${h1}`);
    if(!/rel="canonical"/i.test(html)) problems.push('missing canonical');
    if(!/application\/ld\+json/i.test(html)) problems.push('no JSON-LD schema');
  }

  // JSON-LD validity (all pages)
  for(const m of html.matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi)){
    ldTotal++;
    try{ const o=JSON.parse(m[1]); for(const it of (Array.isArray(o)?o:[o])){ if(!it['@type']||!it['@context']) problems.push('JSON-LD missing @type/@context'); } }
    catch(e){ ldInvalid++; problems.push('invalid JSON-LD'); }
  }

  for(const m of html.matchAll(/href="([^"]+)"/gi)){
    const r=resolveLink(m[1]); if(!r) continue; linksChecked++;
    if(!fs.existsSync(path.join(DIST,r))) brokenLinks.add(`${url}  ->  ${m[1]}`);
  }

  if(problems.length){ pagesWithIssues++; issues+=problems.length; console.log(`✗ ${url}`); problems.forEach(p=>console.log(`    - ${p}`)); }
}

const sum=(a)=>a.reduce((x,y)=>x+y,0);
const jsBytes=sum(allFiles.filter(f=>f.endsWith('.js')&&!f.includes(path.sep+'scripts'+path.sep)).map(f=>fs.statSync(f).size));
const cssBytes=sum(allFiles.filter(f=>f.endsWith('.css')).map(f=>fs.statSync(f).size));
const htmlBytes=sum(pageSizes.map(p=>p.bytes));
const kb=(b)=>(b/1024).toFixed(0)+' KB';
pageSizes.sort((a,b)=>b.bytes-a.bytes);

console.log('\n──────── AUDIT SUMMARY ────────');
console.log(`Pages crawled:          ${htmlFiles.length}`);
console.log(`Pages with issues:      ${pagesWithIssues}`);
console.log(`Total issues:           ${issues}`);
console.log(`Internal links checked: ${linksChecked}`);
console.log(`Broken internal links:  ${brokenLinks.size}`);
console.log(`JSON-LD blocks:         ${ldTotal} (invalid: ${ldInvalid})`);
console.log('\n──────── PERFORMANCE ────────');
console.log(`Bundled JS (shared):    ${kb(jsBytes)}`);
console.log(`Bundled CSS:            ${kb(cssBytes)}`);
console.log(`Total HTML:             ${kb(htmlBytes)} across ${htmlFiles.length} pages (avg ${kb(htmlBytes/htmlFiles.length)})`);
pageSizes.slice(0,4).forEach(p=>console.log(`   ${kb(p.bytes).padStart(7)}  ${p.url}`));
if(brokenLinks.size){ console.log('\nBROKEN LINKS:'); [...brokenLinks].forEach(b=>console.log('  '+b)); }
console.log((issues===0 && brokenLinks.size===0) ? '\n✅ CLEAN — no issues found.' : '\n⚠ Issues above.');
process.exit(0);
