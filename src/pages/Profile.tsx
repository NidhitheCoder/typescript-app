import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Props } from "framer-motion/types/types";
import { GetUsers } from "../redux/user/user.selectors";

const Profile: React.FC<Props> = (props: any) => {
  const userId = parseInt(props.match.params.id);
  const users = useSelector(GetUsers).users;
  let user = users.find((user: any) => user.id === userId);
  return (
    <Flex minH="100vh" flexDirection="column" justifyContent="center" backgroundColor="orange.200">
      <Text color="tomato" fontSize="18" fontWeight="bold">
        Profile page
      </Text>
      <Text>{user.id}</Text>
      <Text>{user.name}</Text>
    </Flex>
  );
};

export default Profile;
