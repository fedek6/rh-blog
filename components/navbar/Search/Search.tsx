import { SearchResult as ISearchResult, SearchData } from "pages/api/search";
import { MainWrapper, ResultsWrapper, SearchWrapper } from "./Search.styles";
import React, { useEffect, useRef, useState } from "react";
import {
  SearchInput,
  SearchInputHandle,
} from "@/components/search/SearchInput";

import { Blanket } from "@/components/common/Blanket";
import { SearchResult } from "@/components/search/SearchResult";
import { Spinner } from "@/components/common/Spinner";
import { useDebounce } from "@/hooks/useDebounce";
import { useSearch } from "@/hooks/useSearch";

interface Props {
  isEmpty: boolean;
}

const isSearchResults = (data: SearchData | undefined): data is SearchData => {
  return !!data && "results" in data;
};

export const Search: React.FC<Props> = ({ isEmpty }) => {
  const [searchInput, setSearchInput] = useState<string>();
  const debouncedSearchInput = useDebounce<string | undefined>(searchInput);
  const { data, isLoading } = useSearch(debouncedSearchInput);
  const searchInputRef = useRef<SearchInputHandle>(null);
  let results: unknown;
  let hasNoResutlts = false;

  const handleSearchInputUpdate = (input: string) => setSearchInput(input);

  if (isSearchResults(data) && "results" in data) {
    results = data.results;
    hasNoResutlts = (results as ISearchResult[]).length === 0;
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
        <SearchInput
          onChange={handleSearchInputUpdate}
          ref={searchInputRef}
          msg={
            hasNoResutlts && !isLoading
              ? "Sorry, there are no results"
              : undefined
          }
        />
      </SearchWrapper>
      <ResultsWrapper>
        {isLoading ? (
          <Blanket>
            <Spinner />
          </Blanket>
        ) : (
          results &&
          (results as ISearchResult[]).map((d) => (
            <SearchResult key={d.slug} searchResult={d} />
          ))
        )}
      </ResultsWrapper>
    </MainWrapper>
  );
};
