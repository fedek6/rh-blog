import * as React from "react";
import Link from "next/link";
import RHLogo from "./logo.svg";

type Props = {
  size: "h-10" | "h-8";
};

type NativeProps = React.ComponentPropsWithoutRef<"a">;

export const Logo: React.FC<Props & NativeProps> = ({ size, ...props }) => {
  return (
    <Link href="/">
      <a {...props}>
        <RHLogo className={`fill-eerie-black dark:fill-white ${size}`} />
      </a>
    </Link>
  );
};
