import { Layout } from "@/components/Layout";
import { CommonSEO } from "@/components/SEO";
import {
  getSortedContent,
  getAllSlugs,
  getAllFrontmatter,
  sortFrontmatterByDate,
} from "@/lib/content";
import type { ParsedUrlQuery } from "querystring";
import type { NextPage, GetStaticPaths, GetStaticProps } from "next";

type Props = {
  test: string;
};

const Home: NextPage<Props> = ({ test }) => {
  return (
    <Layout>
      <CommonSEO />
      <h1 className="text-3xl font-display font-bold text-english-vermillion">
        Hello world!
      </h1>
      <p className="font-mono">Lorem ipsum</p>
      {test}
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  await getSortedContent("test");
  const slugs = await getAllSlugs("blog");

  let posts = await getAllFrontmatter("blog");

  posts = sortFrontmatterByDate(posts);

  // console.log(posts);

  return {
    props: {
      test: "1",
    },
  };
};
