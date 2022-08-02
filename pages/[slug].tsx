import { Layout } from "@/components/Layout";
import { CommonSEO } from "@/components/SEO";
import { Frontmatter, getAllSlugs, getPostContent } from "@/lib/content";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import imageSize from "rehype-img-size";
import Image from "next/image";
import type { NextPage, GetStaticPaths, GetStaticProps } from "next";
import type { ParsedUrlQuery } from "querystring";

interface Props {
  slug: string;
  post: Frontmatter;
  source: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >;
}

interface Params extends ParsedUrlQuery {
  slug: string;
}

const components = {
  h2: (props: any) => (
    <h2
      className="text-2xl font-display font-bold text-english-vermillion"
      {...props}
    />
  ),
  img: (props: any) => (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image {...props} layout="responsive" loading="lazy" />
  ),
};

const Slug: NextPage<Props> = ({ slug, post, source }) => {
  return (
    <Layout>
      <CommonSEO />
      <h1 className="text-3xl font-display font-bold text-english-vermillion">
        {post.title}
      </h1>
      <MDXRemote {...source} components={components} />
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

  const post = file.data as Frontmatter;
  const source = await serialize(file.content, {
    mdxOptions: {
      // use the image size plugin, you can also specify which folder to load images from
      // in my case images are in /public/images/, so I just prepend 'public'

      // @ts-ignore
      rehypePlugins: [[imageSize, { dir: "public" }]],
    },
  });

  return {
    props: {
      ...params,
      post,
      source,
    },
  };
};

export default Slug;
export { getStaticPaths, getStaticProps };
