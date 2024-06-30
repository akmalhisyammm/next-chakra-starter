import { Flex, Link, Text } from '@chakra-ui/react';

import { CustomHeading } from '@/components/atoms';

const ErrorPage = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      textAlign="center"
      height="100vh"
      gap={2}
      padding={4}
    >
      <CustomHeading as="h2" size={['xl', '2xl']} padding={[0, 2]}>
        500 | Error
      </CustomHeading>
      <Text>Something went wrong.</Text>
      <Link href="/" textDecoration="underline" fontWeight={700} padding={8}>
        Back to Home
      </Link>
    </Flex>
  );
};

export default ErrorPage;
