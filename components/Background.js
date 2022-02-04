import React from 'react';
import { Flex } from '@chakra-ui/react';
export default function Background({children}) {
  return <Flex bg="gray.100" h="100vh" w="100wh">{children}</Flex>;
}
