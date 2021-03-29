import { Input, Flex, Text } from "@chakra-ui/react";

function InputSection({ label,value,setVal }: any) {
  return (
    <Flex padding="10" justifyContent="flex-start" alignItems="center">
      <Text whiteSpace="nowrap" mr="10" minW="15" fontWeight="bold">
        {label}{" "}
      </Text>
      <Input value={value} onChange={e => setVal(e.target.value)} />
    </Flex>
  );
}

export default InputSection;
