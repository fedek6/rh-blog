import { Layout } from "@/components/Layout";
import { CommonSEO } from "@/components/SEO";
import {
  getPagination,
  getPaginationPaths,
  getAllFrontmatter,
  sortFrontmatterByDate,
  Pagination as PaginationType,
  Frontmatter,
  slicePosts,
} from "@/lib/content";
import { Pagination } from "@/components/Pagination";
import { Excerpt } from "@/components/content/Post";
import { CONTENT_CONFIG } from "@/config/content";
import type { NextPage, GetStaticPaths, GetStaticProps } from "next";
import type { ParsedUrlQuery } from "querystring";

type Props = {
  posts: Frontmatter[];
  pagination: PaginationType;
};

interface Params extends ParsedUrlQuery {
  number: string;
}

const Page: NextPage<Props> = ({ posts, pagination }) => {
  return (
    <Layout>
      <CommonSEO />
      {JSON.stringify(pagination)}

      {posts.map((post) => (
        <Excerpt {...post} key={post.slug} />
      ))}
      <Pagination pagination={pagination} prefix="page" removePrefix />
    </Layout>
  );
};

const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getPaginationPaths("blog", CONTENT_CONFIG.postsPerPage);

  return {
    paths,
    fallback: false,
  };
};

const getStaticProps: GetStaticProps<Props> = async (context) => {
  const params = context.params as Params;
  const currentPage = parseInt(params.number);

  let posts = await getAllFrontmatter("blog");
  posts = sortFrontmatterByDate(posts);

  const paginatedPosts = slicePosts(
    posts,
    currentPage,
    CONTENT_CONFIG.postsPerPage
  );

  const pagination = getPagination(
    posts.length,
    CONTENT_CONFIG.postsPerPage,
    currentPage
  );

  return {
    props: {
      posts: paginatedPosts,
      pagination,
    },
  };
};

export default Page;
export { getStaticProps, getStaticPaths };
