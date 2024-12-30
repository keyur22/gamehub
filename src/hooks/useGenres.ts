import apiClient from '@/services/api-client';
import { CanceledError } from 'axios';
import { useEffect, useState } from 'react';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

interface GenresResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [loading, setLoading] = useState(false);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState('');

  const fetchGames = async (signal: AbortSignal) => {
    setLoading(true);

    try {
      const resp = await apiClient.get<GenresResponse>('/genres', { signal });
      console.log(resp.data);
      setGenres(resp.data.results);
      setLoading(false);
    } catch (err) {
      if (err instanceof CanceledError) return;
      if (err instanceof Error) setError(err?.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();

    fetchGames(controller.signal);

    return () => controller.abort();
  }, []);

  return { loading, genres, error };
};

export default useGenres;
