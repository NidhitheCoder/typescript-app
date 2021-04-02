import React from 'react';
import {Box,Text} from '@chakra-ui/react';
import SettingsItem from './SettingsItem';

function SettingsList() {
  return (
    <Box w="75%" p="10" textAlign="left" >
      <Text>Settings</Text>
      <SettingsItem Heading={"Account settings"}/>
      <SettingsItem Heading={"Display settings"} />
      <SettingsItem Heading={"Privacy settings"}/>
      <SettingsItem Heading={"General settings"}/>
    </Box>
  );
}

export default SettingsList;