import { getCollection } from 'astro:content';
import { PILLARS, TOOLS } from '../site.config';

export async function GET() {
  const guides = await getCollection('guides', ({ data }) => data.draft === false);
  const items = [];

  for (const g of guides) {
    items.push({
      t: g.data.title,
      d: g.data.description,
      u: `/${g.data.pillar}/${g.slug}/`,
      k: PILLARS.find((p) => p.slug === g.data.pillar)?.title ?? g.data.pillar,
      g: g.data.tags.join(' '),
      type: 'Guide',
    });
  }
  for (const p of PILLARS) {
    items.push({ t: p.hubTitle, d: p.summary, u: `/${p.slug}/`, k: p.title, g: '', type: 'Section' });
  }
  for (const tool of TOOLS) {
    items.push({ t: tool.title, d: tool.summary, u: `/tools/${tool.slug}/`, k: 'Tools', g: 'calculator tool', type: 'Tool' });
  }
  for (const pg of [
    { t: 'Start Here', d: 'The five steps to get right first, in order.', u: '/start-here/' },
    { t: 'Frequently Asked Questions', d: 'Honest answers to the most common questions.', u: '/faq/' },
    { t: 'Glossary', d: 'Plain-English definitions of visa, money and health terms.', u: '/glossary/' },
    { t: 'Free Guides & Checklists', d: 'Downloadable PDF starter kit and checklists.', u: '/resources/' },
    { t: 'Compare Retirement Destinations', d: 'Sort Pattaya against other Thai cities and countries.', u: '/compare/' },
    { t: 'About Us', d: 'Who we are and how we make money, plainly.', u: '/about/' },
  ]) items.push({ ...pg, k: 'Pages', g: '', type: 'Page' });

  return new Response(JSON.stringify(items), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
