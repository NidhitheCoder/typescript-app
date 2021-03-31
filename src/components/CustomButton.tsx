import {Button} from '@chakra-ui/react';

function CustomButton({caption,eventFun,color,bgColor,hovColor}:any) {
  return (
    <Button onClick={eventFun} backgroundColor={bgColor} color={color} _hover={{backgroundColor:hovColor}} >
      {caption}
    </Button>
  );
}

export default CustomButton;