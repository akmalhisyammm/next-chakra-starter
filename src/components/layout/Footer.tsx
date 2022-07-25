import { Box, Divider, Link as ChakraLink, Text, useColorMode } from '@chakra-ui/react';

const Footer = () => {
  const { colorMode } = useColorMode();

  return (
    <Box as="footer" position="relative" width="full" textAlign="center" paddingY={4}>
      <Divider />
      <Text paddingY={4}>
        2022 &bull;{' '}
        <ChakraLink
          href="https://akmalhisyam.my.id/"
          _hover={{ color: colorMode === 'light' ? 'blue.500' : 'blue.200' }}
          isExternal>
          Muhammad Akmal Hisyam
        </ChakraLink>
      </Text>
    </Box>
  );
};

export default Footer;
