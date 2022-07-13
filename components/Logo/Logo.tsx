import * as React from "react";
import Link from "next/link";
import RHLogo from "./logo.svg";

type Props = {};

export const Logo: React.FC<Props> = ({ ...props }) => {
  return (
    <Link href="/">
      <a>
        <RHLogo />
      </a>
    </Link>
  );
};
