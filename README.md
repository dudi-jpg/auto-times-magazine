# Auto Times Israel — מגזין רכב בעברית

אתר תוכן סטטי (RTL) בנוי ב-[Astro](https://astro.build). כתבות נכתבות כקבצי Markdown, והאתר מתארח על Cloudflare Pages.

## הרצה מקומית

```bash
npm install      # פעם אחת
npm run dev      # שרת פיתוח: http://localhost:4321
npm run build    # בונה את האתר לתיקיית dist/
npm run preview  # תצוגה מקדימה של הבנייה
```

## איך מוסיפים כתבה חדשה

1. צור קובץ חדש בתיקייה `src/content/articles/`, למשל `my-article.md`
   (שם הקובץ הופך לכתובת: `/articles/my-article/`).
2. בראש הקובץ הוסף בלוק frontmatter כזה:

```markdown
---
title: 'כותרת הכתבה'
description: 'תקציר קצר שמופיע בכרטיס ובתוצאות החיפוש'
category: 'מבחני דרך'   # אחת מ: מבחני דרך | חדשות | חשמליות | טיפים
author: 'שם הכותב'
pubDate: 2026-07-09      # תאריך בפורמט YYYY-MM-DD
cover: '../../assets/covers/my-image.jpg'   # אופציונלי
coverAlt: 'תיאור התמונה'
featured: false          # true = הכתבה תופיע ככתבה מרכזית בעמוד הבית
---

גוף הכתבה כאן, ב-Markdown רגיל. אפשר כותרות (## ), רשימות, ציטוטים ותמונות.
```

3. שים תמונת נושא בתיקייה `src/assets/covers/` והפנה אליה בשדה `cover`.
4. עשה commit ו-push ל-GitHub — Cloudflare Pages יבנה ויפרסם אוטומטית.

## מבנה הפרויקט

```
src/
├── consts.ts            שם האתר, סלוגן ורשימת הקטגוריות (עריכה מרכזית)
├── content.config.ts    הגדרת שדות הכתבה (schema)
├── content/articles/    ← כאן כותבים כתבות (קבצי .md)
├── assets/covers/       תמונות נושא לכתבות
├── components/          Header, Footer, ArticleCard וכו'
├── layouts/             תבנית הבסיס (SEO, RTL)
├── pages/               index (בית), articles/[slug], category/[category], about
└── styles/global.css    עיצוב ומשתני צבע
```

## שינוי קטגוריות

ערוך את `CATEGORIES` בקובץ `src/consts.ts` וגם את רשימת ה-`enum` ב-`src/content.config.ts` — שתי הרשימות חייבות להיות זהות.

## פריסה

- **Build command:** `npm run build`
- **Output directory:** `dist`
- מתארח על Cloudflare Pages, מחובר ל-GitHub (push לענף הראשי = פרסום אוטומטי).
