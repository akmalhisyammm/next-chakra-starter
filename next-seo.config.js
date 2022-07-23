/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: undefined,
  titleTemplate: '%s | next-chakra-starter',
  defaultTitle: 'next-chakra-starter',
  description: 'Next.js + Chakra UI + TypeScript starter template',
  canonical: 'https://nextchakra.akmalhisyam.my.id',
  openGraph: {
    url: 'https://nextchakra.akmalhisyam.my.id',
    title: 'next-chakra-starter',
    description: 'Next.js + Chakra UI + TypeScript starter template',
    images: [
      {
        url: '/og-image.png',
        alt: 'next-chakra-starter og-image',
      },
    ],
    site_name: 'next-chakra-starter',
  },
  twitter: {
    handle: '@akmalhisyammm',
    cardType: 'summary_large_image',
  },
};

module.exports = defaultSEOConfig;
