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

## Conventions
- Language: Hebrew, RTL. Address the user in Hebrew masculine (לשון זכר).
- Article filename = URL slug. `featured: true` promotes an article to the homepage hero.
- Adding an article: create `.md` + drop cover in `src/assets/covers/`, commit, push → auto-deploy.
