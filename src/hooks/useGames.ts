import apiClient from '@/services/api-client';
import { CanceledError } from 'axios';
import { useEffect, useState } from 'react';

export interface Platform {
  id: number;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface GamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');

  const fetchGames = async (signal: AbortSignal) => {
    try {
      const resp = await apiClient.get<GamesResponse>('/games', { signal });
      console.log(resp.data);
      setGames(resp.data.results);
    } catch (err) {
      if (err instanceof CanceledError) return;
      if (err instanceof Error) setError(err?.message);
    }
  };

  useEffect(() => {
    const controller = new AbortController();

    fetchGames(controller.signal);

    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
