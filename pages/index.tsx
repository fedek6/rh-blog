import { Layout } from "@/components/Layout";
import { CommonSEO } from "@/components/SEO";
import {
  getSortedContent,
  getAllFrontmatter,
  sortFrontmatterByDate,
  Frontmatter,
  getPagination,
} from "@/lib/content";
import { CONTENT_CONFIG } from "@/config/content";
import Link from "next/link";
import type { NextPage, GetStaticProps } from "next";

type Props = {
  posts: Frontmatter[];
  pagination: ReturnType<typeof getPagination>;
};

const Home: NextPage<Props> = ({ posts, pagination }) => {
  return (
    <Layout>
      <CommonSEO />

      <pre>{JSON.stringify(pagination)}</pre>

      {posts.map((post) => (
        <div key={post.date}>
          <h1 className="text-3xl font-display font-bold text-english-vermillion">
            {post.title}
          </h1>
          <p>{post.summary}</p>
          <Link href={`/${post.slug}`}>
            <a className="overline">Read more</a>
          </Link>
        </div>
      ))}
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  let posts = await getAllFrontmatter("blog");
  posts = sortFrontmatterByDate(posts);

  const paginatedPosts = posts.slice(0, CONTENT_CONFIG.postsPerPage);

  const pagination = getPagination(posts.length, CONTENT_CONFIG.postsPerPage);

  return {
    props: {
      posts: paginatedPosts,
      pagination,
    },
  };
};
