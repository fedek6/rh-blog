import { H4, Paragraph } from "@/components/typography";

import type { SearchResult as ISearchResult } from "../../../pages/api/search";
import Link from "next/link";
import { PublicationDate } from "@/components/content/PublicationDate";
import React from "react";

interface Props {
  searchResult: ISearchResult;
}

export const SearchResult: React.FC<Props> = ({ searchResult }) => {
  return (
    <Link href={searchResult.slug}>
      <article onClick={console.log}>
        <PublicationDate date={searchResult.date} />
        <H4>{searchResult.title}</H4>
        <Paragraph $size="sm">{searchResult.summary}</Paragraph>
      </article>
    </Link>
  );
};
