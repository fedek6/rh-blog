import React from "react";
import { uniqueId } from "@/utils/uniqueId";
import Link from "next/link";
import type { Pagination as PaginationType } from "@/lib/content";

type Props = {
  pagination: PaginationType;
  prefix: string;
  removePrefix?: boolean;
};

export const Pagination: React.FC<Props> = ({
  pagination,
  prefix,
  removePrefix = false,
}) => {
  const { pages, current } = pagination;

  const isFirst = current === 1;
  const isLast = current === pages[pages.length - 1];

  let previousElm: React.ReactElement;
  let nextElm: React.ReactElement;

  // Previous link logic
  if (isFirst) {
    previousElm = <span>Previous</span>;
  } else {
    const href =
      current == 2 && removePrefix ? `/` : `/${prefix}/${current - 1}`;

    previousElm = (
      <Link href={href}>
        <a>Previous</a>
      </Link>
    );
  }

  // Next link logic
  if (isLast) {
    nextElm = <span>Next</span>;
  } else {
    const href = `/${prefix}/${current + 1}`;

    nextElm = (
      <Link href={`/${prefix}/${current + 1}`}>
        <a>Next</a>
      </Link>
    );
  }

  return (
    <ul>
      <li>{previousElm}</li>
      {pages.map((i) => {
        let href = "";
        let text = `${i}`;

        if (i === 1) {
          if (removePrefix) {
            href = "/";
          } else {
            href = `/${prefix}`;
          }
        } else {
          href = `/${prefix}/${i}`;
        }

        return (
          <li key={uniqueId()}>
            <Link href={href}>
              <a>{text}</a>
            </Link>
          </li>
        );
      })}
      <li>{nextElm}</li>
    </ul>
  );
};
