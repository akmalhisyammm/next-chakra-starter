'use client';

import { Box, Container, useColorMode } from '@chakra-ui/react';

import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      minHeight="100vh"
      paddingBottom={100}
      transition="0.5s ease-out"
      backgroundColor={colorMode === 'light' ? 'gray.100' : 'gray.900'}
    >
      <Header />

      <Container
        maxWidth="container.lg"
        position="relative"
        top={70}
        padding={4}
        centerContent
      >
        <Box as="main" marginY={22}>
          {children}
        </Box>
        <Footer />
      </Container>
    </Box>
  );
};

export default Layout;
