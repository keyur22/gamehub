import apiClient from '@/services/api-client';
import { Text } from '@chakra-ui/react';
import { AxiosError, CanceledError } from 'axios';
import { useEffect, useState } from 'react';

interface Game {
  id: number;
  name: string;
}

interface GamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  // const [error, setError] = useState('');

  const fetchGames = async (signal: AbortSignal) => {
    try {
      const resp = await apiClient.get<GamesResponse>('/games', { signal });
      console.log(resp.data);
      setGames(resp.data.results);
    } catch (err) {
      console.log(err instanceof CanceledError);
      // setError(err?.message);
    }
  };

  useEffect(() => {
    const controller = new AbortController();

    fetchGames(controller.signal);

    return () => controller.abort();
  }, []);

  return (
    <div>
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameGrid;
