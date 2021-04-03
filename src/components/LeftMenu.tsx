import React from "react";
import { Flex, Link } from "@chakra-ui/react";
import { Props } from "framer-motion/types/types";

const LeftMenu: React.FC<Props> = ({ settingsList }) => {
  return (
    <Flex
      w="25%"
      maxH="90vh"
      flexDirection="column"
      pt="15vh"
      px="5"
      gridRowGap="5"
      alignItems="flex-center"
    >
      {settingsList.map((setting: any, key: number) => {
        return (
          <Link
            key={key}
            href={`#${setting.dataUser}`}
            textDecoration="none"
            textAlign="left"
            color="tomato"
            fontWeight="bold"
            backgroundColor="gray.200"
            p="3"
          >
            {setting.caption}
          </Link>
        );
      })}
    </Flex>
  );
};

export default LeftMenu;
