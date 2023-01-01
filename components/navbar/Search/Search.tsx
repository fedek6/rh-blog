import { MainWrapper, ResultsWrapper, SearchWrapper } from "./Search.styles";
import React, { useState } from "react";

import { SearchInput } from "@/components/search/SearchInput";
import { useDebounce } from "@/hooks/useDebounce";
import { useSearch } from "@/hooks/useSearch";

export const Search: React.FC = () => {
  const [searchInput, setSearchInput] = useState<string>();
  const debouncedSearchInput = useDebounce<string | undefined>(
    searchInput,
    600
  );
  const { data, isLoading } = useSearch(debouncedSearchInput);

  const handleSearchInputUpdate = (input: string) => setSearchInput(input);

  if (data && "results" in data) {
    data.results;
  }

  return (
    <MainWrapper>
      <SearchWrapper>
        <SearchInput onChange={handleSearchInputUpdate} />
      </SearchWrapper>
      <ResultsWrapper>
        {isLoading && "loading"}
        {searchInput} {JSON.stringify(data)}
      </ResultsWrapper>
    </MainWrapper>
  );
};
