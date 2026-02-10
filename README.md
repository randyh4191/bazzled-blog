# bazzled-blog

Static blog for **blog.bazzled.com** (GitHub Pages + Astro).

## Writing / publishing

Posts are Markdown/MDX files in:

- `src/content/posts/`

URLs are:

- `https://blog.bazzled.com/posts/<slug>/`

Create a new post file:

```bash
npm run new -- "Your Post Title"
```

Publish:

```bash
git add -A
git commit -m "post: your title"
git push
```

Pushing to `main` triggers GitHub Actions → builds → deploys to GitHub Pages.

## Dev

```bash
npm install
npm run dev
```

## Deploy details

- GitHub Actions workflow: `.github/workflows/pages.yml`
- Output: `dist/`
- Custom domain: `public/CNAME` contains `blog.bazzled.com`
- Astro config sets:
  - `site: https://blog.bazzled.com`
  - `trailingSlash: 'always'`

## DNS (custom domain)

Set **CNAME**:

- `blog.bazzled.com` → `randyh4191.github.io`

Then in GitHub → Repo Settings → Pages, ensure custom domain is `blog.bazzled.com` (already set via API).
After DNS propagates, enable **Enforce HTTPS**.
