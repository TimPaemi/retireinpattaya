#!/usr/bin/env node
/**
 * Closed-architecture release gate.
 *
 * The source pass scans every publishable input and generator. The dist pass
 * scans the exact artifact and verifies one followed TimPaemi author credit on
 * every HTML document. It intentionally has no dependency on another repo.
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const DIST = path.join(ROOT, 'dist');
const SELF = path.normalize(path.join(ROOT, 'scripts', 'network-gate.mjs'));
const mode = process.argv[2] ?? '--all';
const validModes = new Set(['--all', '--source', '--dist']);

if (!validModes.has(mode)) {
  console.error(`network-gate: unknown mode ${mode}`);
  process.exit(2);
}

const retiredIdentity = new RegExp(['pattaya', 'authority'].join('[\\s-]*'), 'i');
const prohibitedDomains = [
  '2kto200k.com',
  'highrisksignals.com',
  'koh-larn-thailand.com',
  'movetopattaya.com',
  'mrweoutside.com',
  'pattaya-afterdark.com',
  'pattaya-authority.com',
  'pattaya-coffee.com',
  'pattaya-golf.com',
  'pattaya-gym.com',
  'pattaya-insider.com',
  'pattaya-medical.com',
  'pattaya-restaurant-guide.com',
  'pattaya-school-guide.com',
  'pattaya-vehicle-rentals.com',
  'pattayaolympian.com',
  'pattayapersonaltrainer.com',
  'pattayapets.com',
  'pattayastream.com',
  'pattayatools.com',
  'pattayatools.pages.dev',
  'pattayavilla.com',
  'pattayavisahelp.com',
  'timpaemi.live',
  'yannispagiannidis.com',
];
const textExtensions = new Set([
  '.astro', '.css', '.html', '.js', '.json', '.jsx', '.md', '.mdx', '.mjs',
  '.py', '.rss', '.svg', '.toml', '.ts', '.tsx', '.txt', '.xml', '.yaml', '.yml',
]);
const ignoredDirectories = new Set(['.astro', '.git', 'dist', 'node_modules']);
const ignoredRootFiles = new Set([
  'AGENTS.md', 'CHANGELOG-STRUCTURAL.md', 'CLAUDE.md', 'RULES.md',
]);
const issues = [];

function relative(file) {
  return path.relative(ROOT, file).replaceAll('\\', '/');
}

function walk(directory, filter = () => true) {
  const files = [];
  if (!fs.existsSync(directory)) return files;
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.isDirectory() && ignoredDirectories.has(entry.name)) continue;
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...walk(target, filter));
    else if (filter(target)) files.push(target);
  }
  return files;
}

function isText(file) {
  return textExtensions.has(path.extname(file).toLowerCase());
}

function scanText(file, scope) {
  const text = fs.readFileSync(file, 'utf8');
  if (retiredIdentity.test(text)) {
    issues.push(`${scope}:${relative(file)} contains the retired publisher identity`);
  }
  const lower = text.toLowerCase();
  for (const domain of prohibitedDomains) {
    if (lower.includes(domain)) {
      issues.push(`${scope}:${relative(file)} exposes prohibited domain ${domain}`);
    }
  }
}

function sourcePass() {
  const files = walk(ROOT, (file) => {
    if (!isText(file) || path.normalize(file) === SELF) return false;
    return !ignoredRootFiles.has(path.relative(ROOT, file));
  });
  files.forEach((file) => scanText(file, 'source'));
  console.log(`network-gate: source inputs checked ${files.length}`);
}

function attribute(tag, name) {
  const match = tag.match(new RegExp(`\\s${name}\\s*=\\s*(["'])(.*?)\\1`, 'i'));
  return match ? match[2] : '';
}

function isTimPaemiHome(href) {
  try {
    const url = new URL(href);
    return url.protocol === 'https:'
      && url.hostname.toLowerCase() === 'timpaemi.com'
      && url.pathname === '/'
      && !url.search
      && !url.hash;
  } catch {
    return false;
  }
}

function checkAuthorCredit(file) {
  const html = fs.readFileSync(file, 'utf8');
  const anchors = html.match(/<a\b[^>]*>/gi) ?? [];
  const authorLinks = anchors.filter((tag) => isTimPaemiHome(attribute(tag, 'href')));
  const label = relative(file);

  if (authorLinks.length !== 1) {
    issues.push(`dist:${label} has ${authorLinks.length} TimPaemi author links; expected exactly 1`);
    return;
  }

  const relTokens = new Set(attribute(authorLinks[0], 'rel').toLowerCase().split(/\s+/).filter(Boolean));
  if (!relTokens.has('author') || !relTokens.has('noopener')) {
    issues.push(`dist:${label} author link must use rel="author noopener"`);
  }
  for (const blockingToken of ['nofollow', 'sponsored', 'ugc']) {
    if (relTokens.has(blockingToken)) {
      issues.push(`dist:${label} author link must remain followed (found rel=${blockingToken})`);
    }
  }
}

function distPass() {
  if (!fs.existsSync(DIST)) {
    issues.push('dist: artifact missing; run npm run build first');
    return;
  }
  const publicFiles = walk(DIST, isText);
  const htmlFiles = publicFiles.filter((file) => file.endsWith('.html'));
  publicFiles.forEach((file) => scanText(file, 'dist'));
  htmlFiles.forEach(checkAuthorCredit);
  console.log(`network-gate: artifact checked ${publicFiles.length} text files, ${htmlFiles.length} HTML pages`);
}

if (mode !== '--dist') sourcePass();
if (mode !== '--source') distPass();

if (issues.length) {
  issues.forEach((issue) => console.error(`FAIL: ${issue}`));
  console.error(`network-gate: ${issues.length} closed-architecture violation(s)`);
  process.exit(1);
}

console.log('network-gate: PASS - zero prohibited footprint; every HTML page has one followed TimPaemi author link');
