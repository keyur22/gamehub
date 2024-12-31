import apiClient from '@/services/api-client';
import { AxiosRequestConfig, CanceledError } from 'axios';
import { useEffect, useState } from 'react';

interface Response<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: unknown[]
) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');

  const fetchData = async (signal: AbortSignal) => {
    setLoading(true);

    try {
      const resp = await apiClient.get<Response<T>>(endpoint, {
        signal,
        ...requestConfig
      });
      setData(resp.data.results);
      setLoading(false);
    } catch (err) {
      if (err instanceof CanceledError) return;
      if (err instanceof Error) setError(err?.message);
      setLoading(false);
    }
  };

  useEffect(
    () => {
      const controller = new AbortController();

      fetchData(controller.signal);

      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return { loading, data, error };
};

export default useData;
