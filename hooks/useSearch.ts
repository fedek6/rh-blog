import type { SearchData } from "pages/api/search";
import { fetcher } from "@/lib/fetcher";
import useSWR from "swr";

export const useSearch = (input?: string) => {
  const { data, error, isLoading } = useSWR<SearchData>(
    input ? `/api/search?q=${input}` : null,
    fetcher
  );

  return {
    data,
    isLoading,
    isError: error,
  };
};
