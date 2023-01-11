import type { NextApiRequest, NextApiResponse } from "next";

import searchCache from "@/data/search/cache.json";

type SearchResult = Omit<typeof searchCache[0], "blob">;

export type SearchData =
  | {
      results: SearchResult[];
    }
  | {
      msg: string;
    };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<SearchData>
) {
  const {
    query: { q },
  } = req;

  if (req.method === "GET") {
    if (q && typeof q === "string") {
      const results = searchCache
        .filter((post) => post.blob.includes(q))
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
