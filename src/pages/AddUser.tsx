import React, { useEffect, useState } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import InputSection from "../components/InputSection";
import CustomButton from "../components/CustomButton";
import { addUser } from "../redux/user/user.action";
import { useSelector } from "react-redux";
import { GetUsers } from "../redux/user/user.selectors";

const AddUser = () => {
  const count = useSelector(GetUsers).users.length;

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setId(count + 1);
  }, [count]);

  const addUserToList = () => {
    if (name === "" || id === "") {
      alert("Please fill all the fields...");
    } else {
      dispatch(addUser({ name, id }));
      setName("");
      setId("");
      alert(`New user ${name} added..`);
    }
  };
  return (
    <Flex
      minH="100vh"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Text color="green.500" fontWeight="bold">
        Add New User
      </Text>
      <InputSection
        label="Id :"
        value={id}
        disable={true}
        bgColor="yellow.200"
      />
      <InputSection label="Name :" value={name} setVal={setName} />
      <CustomButton
        caption="Add User"
        eventFun={addUserToList}
        bgColor="tomato"
        color="white"
        hovColor="orangered"
      />
    </Flex>
  );
};

export default AddUser;
