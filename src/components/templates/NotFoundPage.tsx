import { Flex, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

import { CustomHeading } from '@/components/atoms';

const NotFoundPage = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      textAlign="center"
      height="100vh"
      gap={2}
      padding={4}>
      <CustomHeading as="h2" size={['xl', '2xl']} padding={[0, 2]}>
        404 | Not Found
      </CustomHeading>
      <Text>This page does not exist.</Text>
      <Link
        as={NextLink}
        href="/"
        textDecoration="underline"
        fontWeight={700}
        padding={8}>
        Back to Home
      </Link>
    </Flex>
  );
};

export default NotFoundPage;
