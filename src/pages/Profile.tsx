import React from "react";
import { Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Props } from "framer-motion/types/types";
import { GetUsers } from "../redux/user/user.selectors";
import TextComponent from '../components/TextComponent';
import AvatarComponent from '../components/AvatarComponent';

const Profile: React.FC<Props> = (props: any) => {
  const userId = parseInt(props.match.params.id);
  const users = useSelector(GetUsers).users;
  let user = users.find((user: any) => user.id === userId);
  return (
    <Flex minH="100vh" flexDirection="column" justifyContent="center" alignItems="center" backgroundColor="orange.200">
      <AvatarComponent name={user.name} id={user.id} />
      <TextComponent text="Profile page" color="red" bgColor="transparent" size="28" weight="bold"/>
      <TextComponent text={user.id}  color="green" bgColor="yellow.200"/>
      <TextComponent text={user.name}  color="green" bgColor="yellow.200"/>
      <TextComponent text={user.email}  color="blue" bgColor="yellow.200"/>
      <TextComponent text={user.phone}  color="orange" bgColor="yellow.200"/>
    </Flex>
  );
};

export default Profile;
