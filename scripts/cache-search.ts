import * as path from "path";

import { getAllFrontmatter, getContentPath } from "../lib/content";

import removeMd from "remove-markdown";
import { writeFileSync } from "fs";

(async () => {
  try {
    const posts = await getAllFrontmatter("blog");
    const contentPath = getContentPath("search");

    const search = posts.map((post) => {
      let blob = post.title;
      blob += " " + post.summary;
      blob += " " + post.tags.join(", ");
      blob += " " + removeMd(post.content);

      blob = blob.toLowerCase();

      return {
        slug: `/${post.slug}`,
        title: post.title,
        summary: post.summary,
        date: post.date,
        blob,
      };
    });

    writeFileSync(path.join(contentPath, "cache.json"), JSON.stringify(search));
    console.log("Successfuly generated search cache 🔍");
  } catch (e) {
    console.error(e);
  }
})();
