import React from "react";
import { Flex } from "@chakra-ui/react";
import {
  FiHome,
  ImProfile,
  FiSettings,
  FiMoreHorizontal,
} from "react-icons/all";
import BottomNavItems from "./BottomNavItems";
import {AppRoutes}  from '../config/config';

const BottomBar: React.FC = () => {
  const menuItems = [
    { id:1, caption: "Home", icon: FiHome,path:AppRoutes.HOME },
    { id:2, caption: "Profile", icon: ImProfile,path:AppRoutes.PROFILE },
    { id:3, caption: "Settings", icon: FiSettings,path:AppRoutes.SETTINGS },
    { id:4, caption: "More", icon: FiMoreHorizontal,path:AppRoutes.MORE },
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
      {menuItems.map((item) => (
        <BottomNavItems key={item.id} caption={item.caption} path={item.path} icon={item.icon} />
      ))}
    </Flex>
  );
};

export default BottomBar;
