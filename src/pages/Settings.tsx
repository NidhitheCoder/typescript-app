import React from "react";
import { Flex, Text,Box} from "@chakra-ui/react";

const Settings = () => {
  return (
    <Flex minH="90vh">
       <Box w="25%" maxH="90vh" backgroundColor="green">two</Box>
       <Box w="75%" backgroundColor="red"  textAlign="left" >Twoo</Box>
    </Flex>
  );
};

export default Settings;
