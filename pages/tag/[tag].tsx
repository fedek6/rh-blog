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
  getTags,
  filterPostsByTag,
} from "@/lib/content";
import { Pagination } from "@/components/Pagination";
import { Excerpt } from "@/components/content/Post";
import { CONTENT_CONFIG } from "@/config/content";
import type { NextPage, GetStaticPaths, GetStaticProps } from "next";
import type { ParsedUrlQuery } from "querystring";

type Props = {
  posts: Frontmatter[];
};

interface Params extends ParsedUrlQuery {
  tag: string;
}

const Tag: NextPage<Props> = ({ posts }) => {
  return (
    <Layout>
      <CommonSEO />

      {posts.map((post) => (
        <Excerpt {...post} key={post.slug} />
      ))}
    </Layout>
  );
};

const getStaticPaths: GetStaticPaths = async () => {
  // const paths = await getPaginationPaths("blog", CONTENT_CONFIG.postsPerPage);
  const tags = await getTags("blog");

  const paths = tags.map((tag) => ({
    params: {
      tag,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

const getStaticProps: GetStaticProps<Props> = async (context) => {
  const params = context.params as Params;

  // console.log(params.tag);

  let posts = await getAllFrontmatter("blog");
  const filteredPosts = filterPostsByTag(posts, params.tag);

  return {
    props: {
      posts: filteredPosts,
    },
  };
};

export default Tag;
export { getStaticProps, getStaticPaths };
