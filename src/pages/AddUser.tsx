import React,{useState} from "react";
import { Flex, Text } from "@chakra-ui/react";
import {useDispatch} from 'react-redux';
import InputSection from "../components/InputSection";
import CustomButton from "../components/CustomButton";
import {addUser} from '../redux/user/user.action';

const AddUser = () => {

  const [name,setName] = useState("");
  const [id,setId]= useState("");
  const dispatch = useDispatch();
  const addUserToList = () =>{
    dispatch(addUser({name,id}));
    setName("");
    setId("");
  }
  return (
    <Flex
      minH="100vh"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Text color="green.500" fontWeight="bold">Add New User</Text>
      <InputSection label="Name :" value={name} setVal={setName} />
      <InputSection label="Id :" value={id} setVal={setId} />
      <CustomButton
        caption="Add User"
        eventFun={addUserToList}
        color="tomato"
      />
    </Flex>
  );
};

export default AddUser;
