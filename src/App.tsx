import { Grid, GridItem, Stack } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <Grid
      templateColumns={{
        base: `1fr`,
        lg: `0.6fr repeat(2, 1fr)`,
        xl: `0.6fr repeat(3, 1fr)`
      }}
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav nav" "aside main main"`,
        xl: `"nav nav nav nav" "aside main main main"`
      }}
    >
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
      <Stack hideBelow='lg'>
        <GridItem area='aside'>
          <GenreList onGenreSelect={(genre) => setSelectedGenre(genre)} />
        </GridItem>
      </Stack>
      <GridItem area='main'>
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
