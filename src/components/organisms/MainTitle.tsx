'use client';

import { Box, Text, useColorMode } from '@chakra-ui/react';

import { CustomHeading } from '@/components/atoms';

const MainTitle = () => {
  const { colorMode } = useColorMode();

  return (
    <Box textAlign="center">
      <CustomHeading as="h1" size={['2xl', '3xl', '3xl']} paddingY={[2, 2, 3]}>
        Next Chakra Starter
      </CustomHeading>
      <Text as="small" color={colorMode === 'light' ? 'gray.500' : 'gray.400'}>
        Next.js + Chakra UI + TypeScript starter template.
      </Text>
    </Box>
  );
};

export default MainTitle;
