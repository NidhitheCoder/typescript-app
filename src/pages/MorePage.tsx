import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import CustomButton from "../components/CustomButton";

const More = () => {
  const socialList = [
    { name: "facebook", bgColor: "blue.500" },
    { name: "instagram", bgColor: "orange.400" },
    { name: "twitter", bgColor: "blue.300" },
    { name: "mail", bgColor: "red.600" },
  ];
  return (
    <Flex
      minH="90vh"
      justifyContent="center"
      flexDirection="column"
      gridGap="5"
      alignItems="center"
    >
      <Text
        color="green.500"
        fontSize="24"
        fontWeight="bold"
        textColor="blue.400"
      >
        Connect us with:
      </Text>
      {socialList.map((item) => (
        <CustomButton
          caption={item.name}
          color="white"
          bgColor={item.bgColor}
          radious="5"
          width="56"
          hovColor="green"
        />
      ))}
    </Flex>
  );
};

export default More;
