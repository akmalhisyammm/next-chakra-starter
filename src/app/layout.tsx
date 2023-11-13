import { Open_Sans } from 'next/font/google';

import { APP_DESCRIPTION, APP_NAME, APP_URL } from '@/constants/meta';
import Providers from '@/app/providers';

import type { Metadata } from 'next';

const font = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: { default: APP_NAME, template: `%s | ${APP_NAME}` },
  description: APP_DESCRIPTION,
  robots: { index: true, follow: true },
  manifest: '/manifest.json',
  metadataBase: new URL(APP_URL),
  openGraph: {
    title: APP_NAME,
    description: APP_DESCRIPTION,
    url: APP_URL,
    images: [
      {
        url: '/og-image.png',
        alt: 'Next Chakra Starter og-image',
      },
    ],
    siteName: APP_NAME,
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    title: APP_NAME,
    description: APP_DESCRIPTION,
    card: 'summary_large_image',
    // creator: '@akmalhisyammm',
  },
  // authors: {
  //   name: 'Muhammad Akmal Hisyam',
  //   url: 'https://akmalhisyam.my.id',
  // },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={font.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
