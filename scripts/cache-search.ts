import { getAllFrontmatter } from "../lib/content";
import removeMd from "remove-markdown";

(async () => {
  try {
    const posts = await getAllFrontmatter("blog");

    const search = posts.map((post) => {
      let content = post.title;
      content += "\n" + post.summary;
      content += "\n" + post.tags.join(", ");
      content += "\n" + removeMd(post.content);

      return {
        slug: `blog/${post.slug}`,
        content,
      };
    });

    console.log(search);
  } catch (e) {
    // this should catch all exceptions
  }
})();
