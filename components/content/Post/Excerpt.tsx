import React from "react";
import Link from "next/link";
import type { Frontmatter } from "@/lib/content";

type Props = {
  urlPrefix?: string;
} & Frontmatter;

export const Excerpt: React.FC<Props> = ({
  title,
  date,
  summary,
  slug,
  urlPrefix = "",
}) => {
  const contentHref = urlPrefix ? `/${urlPrefix}/${slug}` : `/${slug}`;

  return (
    <article>
      <h1 className="text-3xl font-display font-bold text-english-vermillion">
        {title}
      </h1>
      <time>{date}</time>
      <div>
        <p>{summary}</p>
      </div>
      <Link href={contentHref}>
        <a className="overline">Read more</a>
      </Link>
    </article>
  );
};
