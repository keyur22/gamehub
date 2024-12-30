import { Card, CardBody } from '@chakra-ui/react';
import { Skeleton, SkeletonText } from './ui/skeleton';

const GameCardSkeleton = () => {
  return (
    <Card.Root borderRadius={10}>
      <Skeleton height='225px' />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card.Root>
  );
};

export default GameCardSkeleton;
