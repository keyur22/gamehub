import useGenres from '@/hooks/useGenres';
import { getCroppedImageUrl } from '@/services/image-url';
import { HStack, Image, List, Text } from '@chakra-ui/react';

const GenreList = () => {
  const { loading, data: genres, error } = useGenres();

  return (
    <List.Root listStyle='none' p={5} gap={5}>
      {genres.map((genre) => (
        <List.Item>
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize='32px'
              borderRadius={8}
            />
            <Text ml={2}>{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
