import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

export const MDXComponents = {
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
