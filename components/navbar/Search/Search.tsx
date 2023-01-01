import { MainWrapper, ResultsWrapper, SearchWrapper } from "./Search.styles";
import React, { useState } from "react";

import { SearchInput } from "@/components/search/SearchInput";

export const Search: React.FC = () => {
  const [searchInput, setSearchInput] = useState<string>("");

  const handleSearchInputUpdate = (input: string) => console.log(input);

  return (
    <MainWrapper>
      <SearchWrapper>
        <SearchInput onChange={handleSearchInputUpdate} />
      </SearchWrapper>
      <ResultsWrapper>aaa</ResultsWrapper>
    </MainWrapper>
  );
};
