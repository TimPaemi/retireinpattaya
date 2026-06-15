import { getCollection } from 'astro:content';
import { SITE, PILLARS } from '../site.config';

const esc = (s = '') => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export async function GET(context) {
  const site = (context.site ?? SITE.url).toString().replace(/\/$/, '');
  const guides = (await getCollection('guides', ({ data }) => data.draft === false))
    .sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());

  const items = guides.map((g) => {
    const url = `${site}/${g.data.pillar}/${g.slug}/`;
    const cat = PILLARS.find((p) => p.slug === g.data.pillar)?.title ?? g.data.pillar;
    return `    <item>
      <title>${esc(g.data.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <category>${esc(cat)}</category>
      <pubDate>${g.data.publishDate.toUTCString()}</pubDate>
      <description>${esc(g.data.description)}</description>
    </item>`;
  }).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${esc(SITE.name)}</title>
    <link>${site}/</link>
    <description>${esc(SITE.description)}</description>
    <language>en</language>
${items}
  </channel>
</rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
