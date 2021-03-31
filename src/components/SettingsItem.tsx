import React from "react";
import { Text, Flex } from "@chakra-ui/react";

function SettingsItem({ Heading }: any) {
  return (
    <Flex
      justifyContent="flex-start"
      flexDirection="column"
      h="56"
      backgroundColor="red.300"
      p="5"
      my="5"
    >
      <Text fontSize="24" fontWeight="bold">
        {Heading}
      </Text>
      <Text>Settings section details here</Text>
    </Flex>
  );
}

export default SettingsItem;
