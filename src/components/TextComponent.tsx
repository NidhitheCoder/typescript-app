import React from 'react';
import {Flex,Text} from '@chakra-ui/react';

const  TextComponent =({text,color,bgColor,size,weight}:any) => {
  return (
   <Flex justifyContent="center" margin="3" color={color} backgroundColor={bgColor} w="72" padding="2" fontSize={size} fontWeight={weight}>
     <Text>
       {text}
     </Text>
   </Flex>
  );
}

export default TextComponent;