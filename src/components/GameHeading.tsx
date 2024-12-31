import { Genre } from '@/hooks/useGenres';
import { Platform } from '@/hooks/usePlatforms';
import { Heading, Highlight } from '@chakra-ui/react';

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const GameHeading = ({ selectedGenre, selectedPlatform }: Props) => {
  const label = `${selectedGenre?.name || ''} ${selectedPlatform?.name || ''}`;

  return (
    <Heading size='4xl' fontWeight='bold' p={3}>
      <Highlight query={label} styles={{ color: 'pink.500' }}>
        {`${label} Games`}
      </Highlight>
    </Heading>
  );
};

export default GameHeading;
