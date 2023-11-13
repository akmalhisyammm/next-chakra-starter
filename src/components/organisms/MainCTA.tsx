import { Box, Button, Code, HStack, Link } from '@chakra-ui/react';
import { SiGithub } from 'react-icons/si';

const MainCTA = () => {
  return (
    <Box textAlign="center">
      <Code colorScheme="blue">
        npx degit akmalhisyammm/next-chakra-starter {'<YOUR_APP_NAME>'}
      </Code>

      <HStack justifyContent="center" marginY={4}>
        <Link
          href="https://github.com/akmalhisyammm/next-chakra-starter/generate"
          isExternal>
          <Button colorScheme="blue" borderRadius="full">
            Use this template
          </Button>
        </Link>
        <Link
          href="https://github.com/akmalhisyammm/next-chakra-starter"
          isExternal>
          <Button
            colorScheme="blue"
            variant="outline"
            borderRadius="full"
            leftIcon={<SiGithub />}>
            Open in GitHub
          </Button>
        </Link>
      </HStack>
    </Box>
  );
};

export default MainCTA;
