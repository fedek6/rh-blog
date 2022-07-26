import { Layout } from "@/components/Layout";
import { CommonSEO } from "@/components/SEO";
import {
  getSortedContent,
  getAllFrontmatter,
  sortFrontmatterByDate,
  Frontmatter,
} from "@/lib/content";
import { CONTENT_CONFIG } from "@/config/content";
import Link from "next/link";
import type { NextPage, GetStaticProps } from "next";

type Props = {
  posts: Frontmatter[];
};

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <Layout>
      <CommonSEO />

      <h1 className="text-3xl font-display font-bold text-english-vermillion">
        Hello world!
      </h1>
      <p className="font-mono">Lorem ipsum</p>

      {posts.map((post) => (
        <div key={post.date}>
          <h1 className="text-3xl font-display font-bold text-english-vermillion">
            {post.title}
          </h1>
          <p>{post.summary}</p>
          <Link href={`\\${post.slug}`}>
            <a>Read more</a>
          </Link>
        </div>
      ))}
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  await getSortedContent("test");

  let posts = await getAllFrontmatter("blog");
  posts = sortFrontmatterByDate(posts);
  posts = posts.slice(0, CONTENT_CONFIG.postsPerPage - 1);

  console.log(posts);

  console.log(CONTENT_CONFIG.postsPerPage);

  return {
    props: {
      posts,
    },
  };
};
