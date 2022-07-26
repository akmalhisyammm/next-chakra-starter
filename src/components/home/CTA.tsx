import { Button, Code, HStack, Link as ChakraLink } from '@chakra-ui/react';
import { SiGithub } from 'react-icons/si';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeOut', delay: 0.8 }}>
      <Code colorScheme="blue">
        npx degit akmalhisyammm/next-chakra-starter {'<YOUR_APP_NAME>'}
      </Code>

      <HStack justifyContent="center" marginY={4}>
        <ChakraLink
          href="https://github.com/akmalhisyammm/next-chakra-starter/generate"
          _hover={{ textDecoration: 'none' }}
          isExternal>
          <Button colorScheme="blue" borderRadius="full">
            Use this template
          </Button>
        </ChakraLink>
        <ChakraLink
          href="https://github.com/akmalhisyammm/next-chakra-starter"
          _hover={{ textDecoration: 'none' }}
          isExternal>
          <Button colorScheme="blue" variant="outline" borderRadius="full" leftIcon={<SiGithub />}>
            Open in GitHub
          </Button>
        </ChakraLink>
      </HStack>
    </motion.div>
  );
};

export default CTA;
