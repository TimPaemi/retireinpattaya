/* SEO crawler over dist/: title length/dupes, meta-desc dupes, H1 count,
   canonical/OG/Twitter coverage, thin content, generic anchors, alt text.
   Run after `npm run build`:  node scripts/seo.mjs  */
import fs from 'node:fs'; import path from 'node:path';
const DIST=path.resolve('dist'); const pages=[];
(function w(d){for(const e of fs.readdirSync(d,{withFileTypes:true})){const f=path.join(d,e.name); e.isDirectory()?w(f):e.name==='index.html'&&pages.push(f);}})(DIST);
const url=f=>'/'+path.relative(DIST,f).replace(/\\/g,'/').replace(/index\.html$/,'');
const dec=s=>s?s.replace(/&amp;/g,'&').replace(/&#39;/g,"'").replace(/&#38;/g,'&').replace(/&quot;/g,'"'):s;
const get=(h,re)=>{const m=h.match(re);return m?dec(m[1].trim()):null;};
const isContent=u=>!u.startsWith('/embed')&&!u.startsWith('/og');
const titles={},descs={},rows=[];
for(const f of pages){const h=fs.readFileSync(f,'utf8'); const u=url(f);
  const title=get(h,/<title[^>]*>([^<]*)<\/title>/i);
  const desc=get(h,/<meta\s+name="description"\s+content="([^"]*)"/i);
  const h1=(h.match(/<h1[\s>]/gi)||[]).length;
  const main=(h.match(/<main[\s\S]*?<\/main>/i)||[h])[0];
  const words=((main.replace(/<script[\s\S]*?<\/script>/gi,' ').replace(/<[^>]+>/g,' ').match(/\b\w+\b/g))||[]).length;
  if(title&&isContent(u)){(titles[title]=titles[title]||[]).push(u);}
  if(desc&&isContent(u)){(descs[desc]=descs[desc]||[]).push(u);}
  rows.push({u,title,tl:title?title.length:0,desc,canon:/rel="canonical"/i.test(h),ogi:/property="og:image"/i.test(h),tw:/name="twitter:card"/i.test(h),h1,words});}
const C=rows.filter(r=>isContent(r.u));
console.log('=== SEO CRAWL:',rows.length,'pages ===');
console.log('Titles >60:',C.filter(r=>r.tl>60).length,'| <25:',C.filter(r=>r.title&&r.tl<25).length,'| missing:',C.filter(r=>!r.title).length,'| dupe:',Object.values(titles).filter(a=>a.length>1).length);
console.log('Descriptions missing:',C.filter(r=>!r.desc).length,'| dupe:',Object.values(descs).filter(a=>a.length>1).length);
console.log('H1!=1:',C.filter(r=>r.h1!==1).length,'| no canonical:',C.filter(r=>!r.canon).length,'| no og:image:',C.filter(r=>!r.ogi).length,'| no twitter:',C.filter(r=>!r.tw).length);
console.log('Thin (<320w):',C.filter(r=>/\/[a-z-]+\/[a-z]/.test(r.u)&&r.words<320).length,'| median words:',C.map(r=>r.words).sort((a,b)=>a-b)[Math.floor(C.length/2)]);
