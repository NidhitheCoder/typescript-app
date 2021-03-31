import {Button} from '@chakra-ui/react';

function CustomButton({caption,eventFun,color}:any) {
  return (
    <Button onClick={eventFun} backgroundColor={color}>
      {caption}
    </Button>
  );
}

export default CustomButton;