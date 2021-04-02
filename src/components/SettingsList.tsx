import React from 'react';
import {Box,Text} from '@chakra-ui/react';
import SettingsItem from './SettingsItem';

function SettingsList() {
  return (
    <Box w="75%" p="10" textAlign="left" >
      <Text>Settings</Text>
      <SettingsItem id="accountSettings" Heading={"Account settings"}/>
      <SettingsItem id="displaySettings" Heading={"Display settings"} />
      <SettingsItem id="privacySettings" Heading={"Privacy settings"}/>
      <SettingsItem id="generalSettings" Heading={"General settings"}/>
    </Box>
  );
}

export default SettingsList;