import { extendTheme, theme } from '@chakra-ui/react';

import '@fontsource/open-sans';

const customTheme = extendTheme({
  fonts: {
    ...theme.fonts,
    heading: 'Open Sans, sans-serif',
    body: 'Open Sans, sans-serif',
  },
});

export default customTheme;
