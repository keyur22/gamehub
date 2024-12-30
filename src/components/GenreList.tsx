import useGenres from '@/hooks/useGenres';

const GenreList = () => {
  const { loading, data: genres, error } = useGenres();

  return (
    <div>
      {genres.map((genre) => (
        <div>{genre.name}</div>
      ))}
    </div>
  );
};

export default GenreList;
