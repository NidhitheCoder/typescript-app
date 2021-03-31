import { Input, Flex, Text } from "@chakra-ui/react";

function InputSection({ label, value, setVal, disable, bgColor }: any) {
  return (
    <Flex padding="10" justifyContent="flex-end" alignItems="center">
      <Text whiteSpace="nowrap" mr="10" minW="20" fontWeight="bold">
        {label}{" "}
      </Text>
      <Input
        value={value}
        onChange={(e) => setVal(e.target.value)}
        backgroundColor={bgColor}
        fontWeight="bold"
        disabled={disable}
      />
    </Flex>
  );
}

export default InputSection;
