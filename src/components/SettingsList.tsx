import React from 'react';
import {Box,Text} from '@chakra-ui/react';
import SettingsItem from './SettingsItem';
import { Props } from 'framer-motion/types/types';

const  SettingsList:React.FC<Props> =({settingList}) => {
  console.log(settingList);
  return (
    <Box w="75%" p="10" textAlign="left" >
      <Text>Settings</Text>
      {settingList.map((item:any) => <SettingsItem key={item.dataUser} id={item.dataUser} Heading={item.caption}/>)}  
    </Box>
  );
}

export default SettingsList;