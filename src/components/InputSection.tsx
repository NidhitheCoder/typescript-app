import { Input, Flex, Text } from "@chakra-ui/react";

function InputSection({ label }: any) {
  return (
    <Flex padding="10" justifyContent="flex-start" alignItems="center">
      <Text whiteSpace="nowrap" mr="10" minW="15" fontWeight="bold">
        {label}{" "}
      </Text>
      <Input />
    </Flex>
  );
}

export default InputSection;
