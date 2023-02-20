import { DefaultLayout } from "@/components/layout/DefaultLayout";
import { CommonSEO } from "@/components/SEO";
import {
  getAllFrontmatter,
  Frontmatter,
  getTags,
  filterPostsByTag,
} from "@/lib/content";
import { Excerpt } from "@/components/content/Post";
import type { NextPage, GetStaticPaths, GetStaticProps } from "next";
import type { ParsedUrlQuery } from "querystring";

type Props = {
  posts: Frontmatter[];
  tag: string;
};

interface Params extends ParsedUrlQuery {
  tag: string;
}

const Tag: NextPage<Props> = ({ posts, tag }) => {
  return (
    <DefaultLayout>
      <CommonSEO />
      <h1>Tag: {tag}</h1>
      {posts.map((post) => (
        <Excerpt {...post} key={post.slug} />
      ))}
    </DefaultLayout>
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

  let posts = await getAllFrontmatter("blog");
  const filteredPosts = filterPostsByTag(posts, params.tag);

  return {
    props: {
      posts: filteredPosts,
      tag: params.tag,
    },
  };
};

export default Tag;
export { getStaticProps, getStaticPaths };
