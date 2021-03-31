import React from "react";
import { Center, Text, Flex, WrapItem, Avatar } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

type props = {
  item: any;
};

const Card: React.FC<props> = ({ item }) => {
  const history = useHistory();

  const loadPath = (p: any) => history.push(`/profile/${p}`);

  return (
    <Flex
      bg="tomato"
      p="6"
      w="56"
      mb="10"
      borderRadius="5"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      transition="borderRadious 3s"
      _hover={{ bg: "red" }}
      onClick={() => loadPath(item.id)}
    >
      <WrapItem>
        <Avatar
          size="xl"
          name={item.name}
          src={`https://picsum.photos/id/6${item.id}/200`}
        />
      </WrapItem>
      <Center p="4">
        <Text> {item.name}</Text>
      </Center>
    </Flex>
  );
};

export default Card;
