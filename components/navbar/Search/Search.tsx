import { MainWrapper, ResultsWrapper, SearchWrapper } from "./Search.styles";
import React, { useEffect, useRef, useState } from "react";
import {
  SearchInput,
  SearchInputHandle,
} from "@/components/search/SearchInput";

import { useDebounce } from "@/hooks/useDebounce";
import { useSearch } from "@/hooks/useSearch";

interface Props {
  isEmpty: boolean;
}

export const Search: React.FC<Props> = ({ isEmpty }) => {
  const [searchInput, setSearchInput] = useState<string>();
  const debouncedSearchInput = useDebounce<string | undefined>(searchInput);
  const { data, isLoading } = useSearch(debouncedSearchInput);
  const searchInputRef = useRef<SearchInputHandle>(null);

  const handleSearchInputUpdate = (input: string) => setSearchInput(input);

  if (data && "results" in data) {
    data.results;
  }

  useEffect(() => {
    if (isEmpty && searchInputRef.current) {
      searchInputRef.current.reset();
      setSearchInput(undefined);
    }
  }, [isEmpty]);

  return (
    <MainWrapper>
      <SearchWrapper>
        <SearchInput onChange={handleSearchInputUpdate} ref={searchInputRef} />
      </SearchWrapper>
      <ResultsWrapper>
        {isLoading && "loading"}
        {searchInput} {JSON.stringify(data)}
      </ResultsWrapper>
    </MainWrapper>
  );
};
