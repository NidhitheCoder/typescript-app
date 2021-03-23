import React from 'react';
import {Flex,Text} from '@chakra-ui/react';

function BottomNavItems({caption}:any) {
  console.log(caption)
  return (
    <Flex color="whiteAlpha.900">
      <Text fontSize="1xl">
      {caption}
      </Text>
    </Flex>
  );
}

export default BottomNavItems;