import React from "react";
import { Flex, Text, Icon } from "@chakra-ui/react";
import {useHistory} from 'react-router-dom';

type props = {
  caption: string;
  icon:any;
  path:string
};

const BottomNavItems: React.FC<props> = ({ caption,icon,path }) => {
  const history = useHistory();

  const loadPath = (p:any) => history.push(p);
  return (
    <Flex color="whiteAlpha.900" flexDirection="column" onClick={()=>{loadPath(path)}} alignItems="center">
      <Icon as={icon} w={6} h={6} />
      <Text mt={2} fontSize="xs">{caption}</Text>
    </Flex>
  );
};

export default BottomNavItems;
