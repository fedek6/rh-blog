import { getAllFrontmatter, getContentPath } from "../lib/content";
import removeMd from "remove-markdown";
import { writeFileSync } from "fs";
import * as path from "path";

(async () => {
  try {
    const posts = await getAllFrontmatter("blog");
    const contentPath = getContentPath("search");

    const search = posts.map((post) => {
      let content = post.title;
      content += " " + post.summary;
      content += " " + post.tags.join(", ");
      content += " " + removeMd(post.content);

      return {
        slug: `blog/${post.slug}`,
        content,
      };
    });

    writeFileSync(path.join(contentPath, "cache.json"), JSON.stringify(search));
    console.log("Successfuly generated search cache 🔍");
  } catch (e) {
    throw new Error("Something went wrong with cache-search script.");
  }
})();
