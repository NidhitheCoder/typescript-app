import {Button} from '@chakra-ui/react';

function CustomButton({caption,eventFun}:any) {
  return (
    <Button onClick={eventFun}>
      {caption}
    </Button>
  );
}

export default CustomButton;