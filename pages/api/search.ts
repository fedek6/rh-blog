import type { NextApiRequest, NextApiResponse } from "next";

import searchCache from "@/data/search/cache.json";

export interface SearchResult {
  slug: string;
  title: string;
  summary: string;
  date: string;
  blob: string;
}

export type SearchData =
  | {
      results: SearchResult[];
    }
  | {
      msg: string;
    };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Omit<SearchData, "blob">>
) {
  const {
    query: { q },
  } = req;

  if (req.method === "GET") {
    if (q && typeof q === "string") {
      const results = searchCache
        .filter((post) => post.blob.includes(q.toLowerCase()))
        .map((result) => ({
          ...result,
          blob: undefined,
        }));

      res.status(200).json({ results });
    } else {
      res.status(400).json({ msg: "Missing param" });
    }
  } else {
    res.status(500).json({ msg: "Bad method" });
  }
}
