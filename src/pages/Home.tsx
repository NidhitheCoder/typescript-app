import React, { useState, useEffect } from "react";
import { Flex, useToast, Wrap, WrapItem } from "@chakra-ui/react";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import CardSkeleton from "../components/CardSkeleton";
import axios from "axios";
import { setUsers } from "../redux/user/user.action";
import { GetUsers } from "../redux/user/user.selectors";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [usersData, setUsersData] = useState<any[]>([]);
  const usersList = useSelector(GetUsers).users;

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(async (res) => {
        toast({
          position: "top",
          title: "Wait a moment.. It's Loading.",
          status: "info",
          duration: 500,
          isClosable: true,
        });
        await dispatch(setUsers(res.data));
      })
      .catch(() => console.log("Something wrong"));
    setUsersData(usersList);

    setIsLoading(true);

    return () => {
      setIsLoading(false);
    };
  }, [toast, dispatch]);

  return (
    <Flex alignItems="center" minH="100vh">
      <Wrap p="10" spacing="5" color="whiteAlpha.900">
        {usersData.map((item) =>
          isLoading ? (
            <WrapItem key={item.id}>
              <Card  item={item} />
            </WrapItem>
          ) : (
            <CardSkeleton key={item.id} />
          )
        )}
      </Wrap>
    </Flex>
  );
};

export default Home;
