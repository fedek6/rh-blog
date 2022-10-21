import React from "react";
import Link from "next/link";

export type HybridLink = {
  href: string;
  name: string;
  external?: boolean;
};

type NativeProps = React.ComponentPropsWithoutRef<"a">;

export const HybridLink: React.FC<HybridLink & NativeProps> = ({
  href,
  name,
  external = false,
  ...props
}) => {
  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" {...props}>
        {name}
      </a>
    );
  } else {
    return (
      <Link href={href}>
        <a {...props}>{name}</a>
      </Link>
    );
  }
};
