import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';

import '@fontsource/open-sans';
import customTheme from 'styles/customTheme';

import defaultSEOConfig from '../../next-seo.config';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={customTheme}>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>

      <DefaultSeo {...defaultSEOConfig} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
