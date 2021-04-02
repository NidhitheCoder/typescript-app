import React from "react";
import { Flex } from "@chakra-ui/react";
import CustomButton from "./CustomButton";

function LeftMenu() {
  const settingsList = [
    { caption: "Account settings", link: "/accountSettings" },
    { caption: "General settings", link: "/generalSettings" },
    { caption: "Security settings", link: "/securitySettings" },
    { caption: "Privacy settings", link: "/privacySettings" },
    { caption: "Display settings", link: "/displaySettings" },
  ];

  const changeList = (link:any) => {
    console.log(window.location.pathname)
    return window.location.pathname === link;}
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
            caption={setting.caption}
            eventFun={() => {changeList(setting.link)}}
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
