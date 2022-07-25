/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: undefined,
  titleTemplate: '%s | Next Chakra Starter',
  defaultTitle: 'Next Chakra Starter',
  description: 'Next.js + Chakra UI + TypeScript starter template',
  canonical: 'https://nextchakra.akmalhisyam.my.id',
  openGraph: {
    url: 'https://nextchakra.akmalhisyam.my.id',
    title: 'Next Chakra Starter',
    description: 'Next.js + Chakra UI + TypeScript starter template',
    images: [
      {
        url: '/og-image.png',
        alt: 'Next Chakra Starter og-image',
      },
    ],
    site_name: 'Next Chakra Starter',
  },
  twitter: {
    handle: '@akmalhisyammm',
    cardType: 'summary_large_image',
  },
};

module.exports = defaultSEOConfig;
