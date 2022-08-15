// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import searchCache from "@/data/search/cache.json";

type Data =
  | {
      results: string[];
    }
  | {
      error: boolean;
      msg: string;
    };

type Params = {
  search?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const params = req.body as Params;

    if (typeof params.search == "string") {
      const results = searchCache
        .filter((post) => post.content.includes(params.search!))
        .map((result) => result.slug);

      res.status(200).json({ results });
    } else {
      res.status(400).json({ error: true, msg: "Missing param" });
    }
  } else {
    res.status(500).json({ error: true, msg: "Bad method" });
  }
}
