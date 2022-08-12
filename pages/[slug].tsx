import { Layout } from "@/components/Layout";
import { CommonSEO } from "@/components/SEO";
import {
  Frontmatter,
  getAllSlugs,
  getPostContent,
  publishPostAssets,
} from "@/lib/content";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  dark,
  dracula,
  prism,
} from "react-syntax-highlighter/dist/cjs/styles/prism";
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
  code({ node, inline, className, children, ...props }: any) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        style={dracula} // try passing different color schemes, drak, dracula etc.
        language={match[1]}
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      <code>{children}</code>
    );
  },
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
  await publishPostAssets(params.slug, "blog");

  const post = file.data as Frontmatter;
  const source = await serialize(file.content, {
    mdxOptions: {
      // use the image size plugin, you can also specify which folder to load images from
      // in my case images are in /public/images/, so I just prepend 'public'

      rehypePlugins: [
        [
          setImageSrc,
          {
            dir: "public/images/hello-world-3/",
            url: "/images/hello-world-3/",
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
