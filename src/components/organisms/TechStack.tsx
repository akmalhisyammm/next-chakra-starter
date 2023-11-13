'use client';

import { HStack } from '@chakra-ui/react';
import { SiChakraui, SiNextdotjs, SiTypescript } from 'react-icons/si';

import { TechTooltip } from '@/components/molecules';

const TechStack = () => {
  return (
    <HStack justifyContent="center" spacing={5} marginY={8}>
      <TechTooltip label="Next.js" icon={SiNextdotjs} />
      <TechTooltip label="Chakra UI" icon={SiChakraui} />
      <TechTooltip label="TypeScript" icon={SiTypescript} />
    </HStack>
  );
};

export default TechStack;
