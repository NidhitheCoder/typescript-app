import React from "react";
import { Flex} from "@chakra-ui/react";
import LeftMenu from "../components/LeftMenu";
import SettingsList from "../components/SettingsList";

const Settings = () => {
  return (
    <Flex minH="90vh">
       <LeftMenu />
       <SettingsList />
    </Flex>
  );
};

export default Settings;
