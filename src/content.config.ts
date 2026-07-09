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
    }),
});

export const collections = { articles };
