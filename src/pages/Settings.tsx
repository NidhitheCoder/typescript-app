import React from "react";
import { Flex } from "@chakra-ui/react";
import LeftMenu from "../components/LeftMenu";
import SettingsList from "../components/SettingsList";

const Settings = () => {
  const settingsList = [
    { caption: "Account Settings", dataUser: "accountSettings" },
    { caption: "General Settings", dataUser: "generalSettings" },
    { caption: "Security Settings", dataUser: "securitySettings" },
    { caption: "Privacy Settings", dataUser: "privacySettings" },
    { caption: "Display Settings", dataUser: "displaySettings" },
    { caption: "Background Settings", dataUser: "backgroundSettings" },
  ];
  return (
    <Flex minH="90vh">
      <LeftMenu settingsList={settingsList} />
      <SettingsList settingList={settingsList} />
    </Flex>
  );
};

export default Settings;
