import * as React from "react";
import Link from "next/link";
import { Logo } from "../Logo";

type Props = {
  logoClasses: string;
};

export const LogoBanner: React.FC<Props> = ({ logoClasses, ...props }) => {
  return (
    <Link href="/">
      <a
        className="flex items-center justify-between md:transition md:hover:opacity-75"
        {...props}
      >
        <div className="mr-4">
          <Logo className="h-8 lg:h-10" />
        </div>
        <div className="hidden sm:block h-6 text-xl lg:text-2xl font-display font-bold">
          blog
        </div>
      </a>
    </Link>
  );
};
