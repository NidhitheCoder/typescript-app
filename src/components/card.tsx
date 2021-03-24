import React from "react";
import { Center, Text, Flex, WrapItem, Avatar } from "@chakra-ui/react";

type props = {
  item: any;
};

const card: React.FC<props> = ({ item }) => {
  return (
    <Flex
      bg="tomato"
      p="6"
      w="56"
      mb="10"
      borderRadius="5"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      transition="borderRadious 3s"
      _hover={{ bg: "red"}}
    >
      <WrapItem>
        <Avatar
          size="xl"
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
        />
      </WrapItem>
      <Center p="4">
        <Text>Profile Number {item}</Text>
      </Center>
    </Flex>
  );
};

export default card;
