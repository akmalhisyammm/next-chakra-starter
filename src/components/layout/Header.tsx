import { Box, Flex, useColorMode } from '@chakra-ui/react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      as="header"
      width="full"
      height={70}
      backgroundColor={colorMode === 'light' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(23, 25, 35, 0.8)'}
      backdropFilter="blur(10px)"
      position="fixed"
      zIndex={5}>
      <Flex as="nav" maxWidth={800} height="full" margin="0 auto" alignItems="center" padding={4}>
        <Box marginLeft="auto">
          <ThemeToggle />
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
