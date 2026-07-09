// הגדרות כלליות של האתר — נקודה אחת לעריכה של שם, סלוגן וקטגוריות.
export const SITE_TITLE = 'Auto Times Israel';
export const SITE_TAGLINE = 'מגזין הרכב של ישראל — מבחני דרך, חדשות וטכנולוגיה';
export const SITE_DESCRIPTION =
  'Auto Times Israel — מגזין הרכב המוביל בעברית. מבחני דרך, חדשות עולם הרכב, מכוניות חשמליות וטיפים לנהג הישראלי.';

// סדר הקטגוריות בתפריט. חייב להתאים לערכים ב-content.config.ts
export const CATEGORIES = ['מבחני דרך', 'חדשות', 'חשמליות', 'טיפים'] as const;
export type Category = (typeof CATEGORIES)[number];

// כמה כתבות מציגים בעמוד (ארכיון + עמודי קטגוריה)
export const PAGE_SIZE = 12;
