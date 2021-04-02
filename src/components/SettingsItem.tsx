import React from "react";
import { Flex,Icon } from "@chakra-ui/react";
import TextComponent from "./TextComponent";
import {FiSettings} from 'react-icons/fi'

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
      <TextComponent size="24" weight="bold" text={Heading}  color="green" bgColor="yellow.200"/>
      <TextComponent size="17" text={`${Heading} details here`} />
      <Flex flexDirection="row">
      <Icon w={6} h={6} as={FiSettings} color="brand" mr={2} />
      <TextComponent color="green" text={'change settings'}/>
      </Flex>
    </Flex>
  );
}

export default SettingsItem;
