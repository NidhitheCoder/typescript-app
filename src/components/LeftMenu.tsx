import React from "react";
import { Flex } from "@chakra-ui/react";
import CustomButton from "./CustomButton";

function LeftMenu() {
  const settingsList = [
    "Account settings",
    "General settings",
    "Security settings",
    "Privacy settings",
    "Display settings",
  ];
  return (
    <Flex
      w="25%"
      maxH="90vh"
      flexDirection="column"
      pt="15vh"
      px="3"
      gridRowGap="2"
      alignItems="flex-center"
    >
      {settingsList.map((setting, key) => {
        return (
          <CustomButton
            caption={setting}
            key={key}
            color="dark-gray"
            hovColor="red.300"
          />
        );
      })}
    </Flex>
  );
}

export default LeftMenu;
