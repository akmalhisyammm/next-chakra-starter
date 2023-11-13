'use client';

import { Box, Container, IconButton, useColorMode } from '@chakra-ui/react';
import { RiMoonFill, RiSunLine } from 'react-icons/ri';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      as="header"
      width="full"
      height={70}
      backgroundColor={
        colorMode === 'light'
          ? 'rgba(237, 242, 247, 0.8)'
          : 'rgba(23, 25, 35, 0.8)'
      }
      backdropFilter="blur(10px)"
      position="fixed"
      zIndex={5}>
      <Container
        as="nav"
        maxWidth="container.lg"
        height="full"
        padding={4}
        centerContent>
        <Box marginLeft="auto">
          <IconButton
            aria-label="Theme Toggle"
            borderRadius="full"
            icon={colorMode === 'light' ? <RiMoonFill /> : <RiSunLine />}
            onClick={toggleColorMode}
            variant="ghost"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
