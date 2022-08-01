import { Layout } from "@/components/Layout";
import { CommonSEO } from "@/components/SEO";
import { Frontmatter, getAllSlugs, getPostContent } from "@/lib/content";
import type { NextPage, GetStaticPaths, GetStaticProps } from "next";
import type { ParsedUrlQuery } from "querystring";

interface Props {
  slug: string;
  post: Frontmatter;
}

interface Params extends ParsedUrlQuery {
  slug: string;
}

const Slug: NextPage<Props> = ({ slug, post }) => {
  return (
    <Layout>
      <CommonSEO />
      <h1 className="text-3xl font-display font-bold text-english-vermillion">
        {slug}
      </h1>
      {JSON.stringify(post)}
    </Layout>
  );
};

const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getAllSlugs("blog");

  const paths = slugs.map((slug) => ({
    params: {
      slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

const getStaticProps: GetStaticProps<Props> = async (context) => {
  const params = context.params as Params;
  const file = getPostContent(params.slug, "blog");

  const content = file.content;
  const post = file.data as Frontmatter;

  return {
    props: {
      ...params,
      post,
    },
  };
};

export default Slug;
export { getStaticPaths, getStaticProps };
