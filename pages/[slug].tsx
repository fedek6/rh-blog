import { Layout } from "@/components/Layout";
import { CommonSEO } from "@/components/SEO";
import { getSortedContent, getAllSlugs } from "@/lib/content";
import type { NextPage, GetStaticPaths, GetStaticProps } from "next";
import type { ParsedUrlQuery } from "querystring";

interface Props extends ParsedUrlQuery {
  slug: string;
}

const Slug: NextPage<Props> = ({ slug }) => {
  return (
    <Layout>
      <CommonSEO />
      <h1 className="text-3xl font-display font-bold text-english-vermillion">
        {slug}
      </h1>
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
  const params = context.params as Props;

  return {
    props: {
      ...params,
    },
  };
};

export default Slug;
export { getStaticPaths, getStaticProps };
