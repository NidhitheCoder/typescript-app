import React from 'react';
import {Skeleton} from '@chakra-ui/react';

function CardSkeleton() {
  return (
    <Skeleton h="160" borderRadius="5" startColor="whiteAlpha.200" endColor="red.200"></Skeleton>
  );
}

export default CardSkeleton;