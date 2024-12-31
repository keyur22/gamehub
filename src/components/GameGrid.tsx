import useGames from '@/hooks/useGames';
import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import { Genre } from '@/hooks/useGenres';
import { Platform } from '@/hooks/usePlatforms';

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
  searchText: string;
}

const GameGrid = ({ selectedGenre, selectedPlatform, searchText }: Props) => {
  const {
    loading,
    data: games,
    error
  } = useGames(selectedGenre, selectedPlatform, searchText);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error && !loading) {
    return null;
  }

  if (!loading && !error && !games?.length) {
    return (
      <Text textStyle='xl' mx='auto' mt={5} color='red' fontWeight='semibold'>
        No Results found
      </Text>
    );
  }

  return (
    <Box w='100%'>
      <Text>{error}</Text>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={5} padding={3}>
        {loading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {!loading &&
          !!games?.length &&
          games.map((game) => <GameCard key={game.id} game={game} />)}
      </SimpleGrid>
    </Box>
  );
};

export default GameGrid;
