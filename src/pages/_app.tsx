import { ChakraProvider } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';

import customTheme from 'styles/customTheme';
import defaultSEOConfig from '../../next-seo.config';

import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={customTheme}>
      <DefaultSeo {...defaultSEOConfig} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
