import { GLOSSARY } from '../data/glossary';
export async function GET() {
  const map = {};
  for (const t of GLOSSARY) map[t.slug] = { term: t.term, def: t.definition };
  return new Response(JSON.stringify(map), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
}
