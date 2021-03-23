import React from "react";
import { Center, Text, Flex, WrapItem, Avatar } from "@chakra-ui/react";

function card({ item }: any) {
  return (
    <Flex bg="tomato" p="6" borderRadius="5" justifyContent="center" alignItems="center" flexDirection="column">
      <WrapItem>
        <Avatar
          size="xl"
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
        />
      </WrapItem>
      <Center p="4">
        <Text>heyyy there {item}</Text>
      </Center>
    </Flex>
  );
}

export default card;
