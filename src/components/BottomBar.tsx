import React from "react";
import { Flex } from "@chakra-ui/react";
import {
  FiHome,
  ImProfile,
  FiSettings,
  FiMoreHorizontal,
} from "react-icons/all";
import BottomNavItems from "./BottomNavItems";

const BottomBar: React.FC = () => {
  const menuItems = [
    { caption: "Home", icon: FiHome },
    { caption: "Profile", icon: ImProfile },
    { caption: "Settings", icon: FiSettings },
    { caption: "More", icon: FiMoreHorizontal },
  ];
  return (
    <Flex
      position="sticky"
      bottom="0"
      left="0"
      right="0"
      h="70"
      bg="red.900"
      justifyContent="space-evenly"
      alignItems="center"
    >
      {menuItems.map((items) => (
        <BottomNavItems caption={items.caption} icon={items.icon} />
      ))}
    </Flex>
  );
};

export default BottomBar;
