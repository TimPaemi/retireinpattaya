/* Auto-link glossary terms in guide content to /glossary/#slug.
   Links the FIRST mention of each term per page (max 6 links/page), skipping
   headings, existing links and code. Keep TERMS in sync with src/data/glossary.ts. */
const TERMS = [
  ['Long-Term Resident', 'ltr-visa'],
  ['LTR visa', 'ltr-visa'],
  ['Non-Immigrant O visa', 'non-o-visa'],
  ['Non-Immigrant O', 'non-o-visa'],
  ['Non-O', 'non-o-visa'],
  ['retirement extension', 'retirement-extension'],
  ['O-A visa', 'o-a-visa'],
  ['O-A', 'o-a-visa'],
  ['O-X visa', 'o-x-visa'],
  ['O-X', 'o-x-visa'],
  ['90-day report', '90-day-report'],
  ['90-day reporting', '90-day-report'],
  ['TM30', 'tm30'],
  ['re-entry permit', 're-entry-permit'],
  ['seasoned', 'seasoning'],
  ['seasoning', 'seasoning'],
  ['remitted income', 'remitted-income'],
  ['frozen pension', 'frozen-pension'],
  ['frozen State Pension', 'frozen-pension'],
  ['IPMI', 'ipmi'],
  ['pre-existing condition', 'pre-existing-condition'],
  ['foreign-ownership quota', 'foreign-quota'],
  ['foreign quota', 'foreign-quota'],
]
  // longest first so multi-word terms win over their substrings
  .sort((a, b) => b[0].length - a[0].length);

const isLetter = (c) => !!c && /[A-Za-z0-9]/.test(c);

function findMatch(text, used) {
  let best = null;
  for (const [term, slug] of TERMS) {
    if (used.has(slug)) continue;
    const idx = text.toLowerCase().indexOf(term.toLowerCase());
    if (idx === -1) continue;
    const before = text[idx - 1], after = text[idx + term.length];
    if (isLetter(before) || isLetter(after)) continue; // whole-word only
    if (best === null || idx < best.idx) best = { idx, len: term.length, slug };
  }
  return best;
}

export default function remarkGlossary() {
  return (tree) => {
    const used = new Set();
    let count = 0;
    const MAX = 6;

    const walk = (node) => {
      if (!node || count >= MAX) return;
      if (['heading', 'link', 'linkReference', 'code', 'inlineCode'].includes(node.type)) return;
      if (!Array.isArray(node.children)) return;
      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];
        if (child.type === 'text' && count < MAX) {
          const m = findMatch(child.value, used);
          if (m) {
            const before = child.value.slice(0, m.idx);
            const matched = child.value.slice(m.idx, m.idx + m.len);
            const after = child.value.slice(m.idx + m.len);
            const link = {
              type: 'link',
              url: `/glossary/#${m.slug}`,
              data: { hProperties: { className: 'glossary-link', title: 'See glossary definition' } },
              children: [{ type: 'text', value: matched }],
            };
            const repl = [];
            if (before) repl.push({ type: 'text', value: before });
            repl.push(link);
            if (after) repl.push({ type: 'text', value: after });
            node.children.splice(i, 1, ...repl);
            used.add(m.slug);
            count++;
            i += repl.length - 1; // skip past inserted nodes (link won't be re-walked)
          }
        } else {
          walk(child);
        }
      }
    };
    walk(tree);
  };
}
