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

  return (
    <ul>
      <li>
        {isFirst ? (
          <span>Previous</span>
        ) : (
          <Link href={`/${prefix}/${current - 1}`}>
            <a>Previous</a>
          </Link>
        )}
      </li>
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
      <li>
        {isLast ? (
          <span>Next</span>
        ) : (
          <Link href={`/${prefix}/${current + 1}`}>
            <a>Next</a>
          </Link>
        )}
      </li>
    </ul>
  );
};
