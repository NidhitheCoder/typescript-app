import React, { useState, useEffect } from "react";
import { Flex, useToast } from "@chakra-ui/react";
import Card from "../components/card";
import CardSkeleton from "../components/CardSkeleton";

const Home: React.FC = () => {
  const arr = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
  ];

  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    toast({
      position: "top",
      title: "Wait a moment.. It's Loading.",
      status: "info",
      duration: 2000,
      isClosable: true,
    });

    let interval = setTimeout(() => {
      setIsLoading(true);
    }, 2500);

    return () => {
      clearTimeout(interval);
      setIsLoading(false);
    };
  }, [toast]);

  return (
    <Flex
      p="5"
      mx="20"
      my="10"
      minH="100vh"
      flexWrap="wrap"
      justifyContent="space-around"
      color="whiteAlpha.900"
    >
      {arr.map((item) =>
        isLoading ? <Card key={item} item={item} /> : <CardSkeleton />
      )}
    </Flex>
  );
};

export default Home;
