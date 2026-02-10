#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const title = process.argv.slice(2).join(' ').trim();
if (!title) {
  console.error('Usage: npm run new -- "Post Title"');
  process.exit(1);
}

const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9\s-]/g, '')
  .trim()
  .replace(/\s+/g, '-')
  .replace(/-+/g, '-');

const today = new Date();
const yyyy = today.getUTCFullYear();
const mm = String(today.getUTCMonth() + 1).padStart(2, '0');
const dd = String(today.getUTCDate()).padStart(2, '0');

const dir = path.resolve('src/content/posts');
fs.mkdirSync(dir, { recursive: true });

const filename = `${yyyy}-${mm}-${dd}-${slug}.md`;
const full = path.join(dir, filename);

if (fs.existsSync(full)) {
  console.error(`Already exists: ${full}`);
  process.exit(1);
}

const isoDate = `${yyyy}-${mm}-${dd}`;

const content = `---\n`
  + `title: "${title.replace(/"/g, '\\"')}"\n`
  + `description: ""\n`
  + `pubDate: ${isoDate}\n`
  + `tags: ["ai", "technology"]\n`
  + `---\n\n`
  + `\n`;

fs.writeFileSync(full, content, 'utf8');
console.log(full);
