import React from 'react';
import {Flex} from  '@chakra-ui/react';
import BottomNavItems from './BottomNavItems';

function BottomBar() {
  return (
    <Flex position="sticky" bottom="0" left="0" right="0" h="70" bg="whatsapp.800" justifyContent="space-evenly" alignItems="center">
      <BottomNavItems caption="Home" />
      <BottomNavItems caption="Profile" />
      <BottomNavItems caption="Settings" />
      <BottomNavItems caption="More" />
    </Flex>
  );
}

export default BottomBar;