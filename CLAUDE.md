# Auto Times Israel — Project Guide (for Claude)

Hebrew (RTL) car-magazine website. Static content site built with **Astro 5**.

## Stack & hosting
- Astro 5, content collections (glob loader), `@fontsource-variable/heebo`.
- Articles = Markdown files in `src/content/articles/`.
- Deploy: GitHub (account **dudi@adgpt.com**) → Cloudflare Pages. Build `npm run build`, output `dist`.
- Domain from GoDaddy, DNS moved to Cloudflare nameservers.

## Commands
- `npm run dev` → http://localhost:4321
- `npm run build` / `npm run preview`

## Key files
- `src/consts.ts` — site title, tagline, CATEGORIES (edit here first).
- `src/content.config.ts` — article schema. Category enum MUST match `CATEGORIES` in consts.ts.
- `src/content/articles/*.md` — the articles.
- `src/assets/covers/` — cover images referenced from frontmatter as `../../assets/covers/x.jpg`.

## Daily automation (5 articles/day)
- `scripts/generate-daily.mjs` — calls the Anthropic API (`@anthropic-ai/sdk`, model `claude-opus-4-8`, adaptive thinking, structured outputs) to write N professional Hebrew articles (SEO + GEO: focus keyword, meta desc, key takeaways/TL;DR, comparison table, FAQ). Fetches real images from Wikimedia Commons with a fallback to the local `src/assets/covers/pool/`.
- Runs via GitHub Actions cron `.github/workflows/daily-articles.yml` (05:00 UTC). Needs repo secret **ANTHROPIC_API_KEY**. Each run commits + pushes → Cloudflare auto-deploys.
- Run manually: `ANTHROPIC_API_KEY=... ARTICLES_PER_RUN=2 npm run generate:daily`.
- SEO/GEO site-wide: `@astrojs/sitemap`, `public/robots.txt` (allows AI crawlers), `/rss.xml`, JSON-LD (NewsArticle + FAQPage + Breadcrumb + Organization + WebSite) in the article layout + BaseLayout.

## Conventions
- Language: Hebrew, RTL. Address the user in Hebrew masculine (לשון זכר).
- Article filename = URL slug. `featured: true` promotes an article to the homepage hero.
- Adding an article: create `.md` + drop cover in `src/assets/covers/`, commit, push → auto-deploy.
