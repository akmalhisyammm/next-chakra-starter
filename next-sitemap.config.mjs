/** @type {import('next-sitemap').IConfig} */
const nextSitemapConfig = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
  generateRobotsTxt: true,
};

export default nextSitemapConfig;
