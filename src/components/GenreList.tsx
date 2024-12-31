import useGenres, { Genre } from '@/hooks/useGenres';
import { getCroppedImageUrl } from '@/services/image-url';
import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  Spinner
} from '@chakra-ui/react';

interface Props {
  onGenreSelect: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onGenreSelect, selectedGenre }: Props) => {
  const { loading, data: genres, error } = useGenres();

  if (loading)
    return (
      <HStack justifyContent='center' p={5}>
        <Spinner />
      </HStack>
    );

  if (error) return null;

  return (
    <>
      <Heading p={5}>Genres</Heading>
      <List.Root listStyle='none' p={5} gap={5}>
        {genres.map((genre) => (
          <List.Item key={genre.id}>
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize='32px'
                borderRadius={8}
                alt={genre.name}
              />
              <Button
                onClick={() => onGenreSelect(genre)}
                variant='ghost'
                fontWeight={selectedGenre?.id === genre.id ? 'bold' : 'normal'}
              >
                {genre.name}
              </Button>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
