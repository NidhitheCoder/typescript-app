import React from 'react';
import {Flex} from '@chakra-ui/react';
import CustomButton from './CustomButton';

function LeftMenu() {
  return (
    <Flex w="25%" maxH="90vh" h="90vh"  flexDirection="column" pt="15vh" gridRowGap="2" alignItems="flex-center">
       <CustomButton
        caption="Add User"
        width="100%"
        color="dark-gray"
        hovColor="red.300"
      />
       <CustomButton
        caption="Add User"
        width="100%"
        color="dark-gray"
        hovColor="red.300"
      />
         <CustomButton
        caption="Add User"
        width="100%"
        color="dark-gray"
        hovColor="red.300"
      />
       <CustomButton
        caption="Add User"
        width="100%"
        color="dark-gray"
        hovColor="red.300"
      />
        <CustomButton
        caption="Add User"
        width="100%"
        color="dark-gray"
        hovColor="red.300"
      />
       <CustomButton
        caption="Add User"
        width="100%"
        color="dark-gray"
        hovColor="red.300"
      />
    </Flex>
  );
}

export default LeftMenu;