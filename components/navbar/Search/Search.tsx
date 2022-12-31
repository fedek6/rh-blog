import { MainWrapper, ResultsWrapper, SearchWrapper } from "./Search.styles";

import React from "react";
import { SearchInput } from "@/components/search/SearchInput";

export const Search: React.FC = () => {
  return (
    <MainWrapper>
      <SearchWrapper>
        <SearchInput />
      </SearchWrapper>
      <ResultsWrapper>aaa</ResultsWrapper>
    </MainWrapper>
  );
};
