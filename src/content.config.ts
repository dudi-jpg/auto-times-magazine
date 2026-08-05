import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// אוסף הכתבות של המגזין. כל קובץ Markdown בתיקייה src/content/articles הוא כתבה.
const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(), // כותרת הכתבה
      description: z.string(), // תקציר קצר שמופיע בכרטיס ובעמוד הכתבה
      category: z.enum(['מבחני דרך', 'חדשות', 'חשמליות', 'טיפים']), // קטגוריה
      author: z.string().default('מערכת Auto Times Israel'),
      pubDate: z.coerce.date(), // תאריך פרסום, פורמט YYYY-MM-DD
      cover: image().optional(), // תמונת נושא (בתיקיית src/content/articles או ../../assets)
      coverAlt: z.string().default(''),
      featured: z.boolean().default(false), // האם להציג ככתבה מרכזית בעמוד הבית
      updatedDate: z.coerce.date().optional(), // תאריך עדכון אחרון (dateModified ל-SEO)
      // ---- שדות SEO / GEO (אופציונליים) ----
      focusKeyword: z.string().optional(), // מילת מפתח מרכזית
      keywords: z.array(z.string()).default([]), // מילות מפתח ל-meta keywords ול-schema
      keyTakeaways: z.array(z.string()).default([]), // תקציר נקודות (TL;DR) — מצוין ל-GEO
      // שאלות ותשובות — נכנס גם ל-FAQ schema.
      // preprocess ממיר faq ריק/null (הגנרטור לפעמים משאיר אותו null) למערך ריק,
      // כדי ש-null לא יפיל את כל הבנייה ב-Cloudflare (‎.default תופס רק undefined).
      faq: z.preprocess(
        (v) => v ?? [],
        z.array(z.object({ question: z.string(), answer: z.string() })),
      ),
    }),
});

export const collections = { articles };
