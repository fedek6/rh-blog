import { fetcher } from "@/lib/fetcher";
import useSWR from "swr";

export const useSearch = (input: string) => {
  const { data, error, isLoading } = useSWR(`/api/user/${input}`, fetcher<{}>);

  return {
    user: data,
    isLoading,
    isError: error,
  };
};
