'use client';

import { Box, Link, Text, useColorMode } from '@chakra-ui/react';

const Footer = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      as="footer"
      position="relative"
      width="full"
      textAlign="center"
      borderTopWidth={1}
      borderColor={colorMode === 'light' ? 'gray.400' : 'gray.500'}
      paddingY={4}>
      <Text>
        {new Date().getFullYear()} &bull;{' '}
        <Link
          href="https://akmalhisyam.my.id"
          _hover={{ color: colorMode === 'light' ? 'blue.500' : 'blue.200' }}
          isExternal>
          Muhammad Akmal Hisyam
        </Link>
      </Text>
    </Box>
  );
};

export default Footer;
