// RSS Feed 生成
// 需要先安装: npm install @astrojs/rss

import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('posts');

  return rss({
    title: 'Astro Blog',
    description: 'A modern blog built with Astro 5',
    site: context.site,
    items: posts
      .filter(post => !post.data.draft)
      .map(post => ({
        title: post.data.title,
        pubDate: post.data.pubDate || post.data.date,
        description: post.data.description,
        link: `/blog/${post.slug}/`,
        author: post.data.author,
        categories: post.data.tags,
      })),
    customData: `<language>en-us</language>`,
    stylesheet: '/rss-styles.xsl',
  });
}
