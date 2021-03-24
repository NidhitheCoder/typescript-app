import React from "react";
import { Flex, Text, Icon } from "@chakra-ui/react";

type props = {
  caption: string;
  icon:any;
};

const BottomNavItems: React.FC<props> = ({ caption,icon }) => {
  return (
    <Flex color="whiteAlpha.900" flexDirection="column" alignItems="center">
      <Icon as={icon} w={6} h={6} />
      <Text mt={2} fontSize="xs">{caption}</Text>
    </Flex>
  );
};

export default BottomNavItems;
