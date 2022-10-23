import { DefaultLayout } from "@/components/layout/DefaultLayout";
import { CommonSEO } from "@/components/SEO";
import {
  Frontmatter,
  getAllSlugs,
  getPostContent,
  publishPostAssets,
} from "@/lib/content";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { MDXComponents } from "@/components/MDXComponents";
import type { NextPage, GetStaticPaths, GetStaticProps } from "next";
import type { ParsedUrlQuery } from "querystring";
import path from "path";
import { setImageSrc } from "@fedek6/rehype-img";

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

const Slug: NextPage<Props> = ({ slug, post, source }) => {
  return (
    <DefaultLayout>
      <CommonSEO />
      <h1 className="text-3xl font-display font-bold text-english-vermillion">
        {post.title}
      </h1>
      <MDXRemote {...source} components={MDXComponents} />
    </DefaultLayout>
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
  await publishPostAssets(params.slug, "blog");

  const post = file.data as Frontmatter;
  const source = await serialize(file.content, {
    mdxOptions: {
      rehypePlugins: [
        [
          setImageSrc,
          {
            dir: path.join("public", "images", params.slug),
            url: `/images/${params.slug}/`,
          },
        ],
      ],
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
