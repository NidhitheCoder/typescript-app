import { Button } from "@chakra-ui/react";

function CustomButton({
  caption,
  eventFun,
  color,
  bgColor,
  hovColor,
  width,
  radious,
}: any) {
  return (
    <Button
      onClick={eventFun}
      backgroundColor={bgColor}
      color={color}
      _hover={{ backgroundColor: hovColor}}
      w={width}
      borderRadius={radious}
    >
      {caption}
    </Button>
  );
}

export default CustomButton;
