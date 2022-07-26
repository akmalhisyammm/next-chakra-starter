import { Heading, Text, useColorMode } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Title = () => {
  const { colorMode } = useColorMode();

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeOut' }}>
      <Heading as="h1">Next Chakra Starter</Heading>
      <Text as="small" color={colorMode === 'light' ? 'gray.500' : 'gray.400'}>
        Next.js + Chakra UI + TypeScript starter template.
      </Text>
    </motion.div>
  );
};

export default Title;
