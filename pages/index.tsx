import { Layout } from "@/components/Layout";
import { CommonSEO } from "@/components/SEO";
import { Pagination } from "@/components/Pagination";
import { Excerpt } from "@/components/content/Post";
import {
  getAllFrontmatter,
  sortFrontmatterByDate,
  Frontmatter,
  getPagination,
  Pagination as PaginationType,
} from "@/lib/content";
import { CONTENT_CONFIG } from "@/config/content";
import type { NextPage, GetStaticProps } from "next";

type Props = {
  posts: Frontmatter[];
  pagination: PaginationType;
};

const Home: NextPage<Props> = ({ posts, pagination }) => {
  return (
    <Layout>
      <CommonSEO />

      {posts.map((post) => (
        <Excerpt {...post} key={post.slug} />
      ))}

      <Pagination pagination={pagination} prefix="page" removePrefix />
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
