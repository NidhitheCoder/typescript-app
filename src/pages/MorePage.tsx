import React from "react";
import { Flex, Text, Link } from "@chakra-ui/react";

const More = () => {
  const socialList = [
    { name: "Facebook", bgColor: "blue.600" , url:"https://www.facebook.com"},
    { name: "Instagram", bgColor: "orange.400" , url:"https://www.instagram.com"},
    { name: "Twitter", bgColor: "blue.300" , url:"https://www.twitter.com"},
    { name: "Mail", bgColor: "red.600" , url:"https://www.gmail.com"},
  ];
  return (
    <Flex
      minH="90vh"
      justifyContent="center"
      flexDirection="column"
      gridGap="5"
      alignItems="center"
    >
      <Text>We welcomes you...</Text>
      <Text
        color="green.500"
        fontSize="24"
        fontWeight="bold"
        textColor="blue.400"
        mb="10"
      >
        Connect us with:
      </Text>
      {socialList.map((item) => (
        <Link
          href={item.url}
          p="2"
          color="white"
          target="_blank"
          backgroundColor={item.bgColor}
          borderRadius="5"
          w="56"
          _hover={{backgroundColor:"green"}}
        >{item.name}</Link>
      ))}
    </Flex>
  );
};

export default More;
