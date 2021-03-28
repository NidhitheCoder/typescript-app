import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import InputSection from "../components/InputSection";
import CustomButton from "../components/CustomButton";

const AddUser = () => {
  return (
    <Flex
      minH="100vh"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Text color="green.500">Add new user page</Text>
      <InputSection label="Name :" />
      <InputSection label="Id :" />
      <CustomButton
        caption="Add User"
        eventFun={() => console.log("Add new User")}
      />
    </Flex>
  );
};

export default AddUser;
