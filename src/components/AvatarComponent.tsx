import React from 'react';
import {Avatar} from '@chakra-ui/react';

function AvatarComponent({name,id}:any) {
  return (
    <Avatar
    size="xl"
    name={name}
    src={`https://picsum.photos/id/6${id}/200`}
  />
  );
}

export default AvatarComponent;