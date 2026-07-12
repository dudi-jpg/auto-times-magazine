import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
  const articles = (await getCollection('articles')).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    xmlns: { content: 'http://purl.org/rss/1.0/modules/content/' },
    items: articles.slice(0, 50).map((a) => ({
      title: a.data.title,
      description: a.data.description,
      pubDate: a.data.pubDate,
      link: `/articles/${a.id}/`,
      categories: [a.data.category],
      author: a.data.author,
    })),
    customData: `<language>he-il</language>`,
  });
}
