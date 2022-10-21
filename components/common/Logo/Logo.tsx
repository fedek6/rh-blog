import * as React from "react";
import Link from "next/link";
import RHLogo from "./logo.svg";

type Props = {
  logoClasses: string;
};

export const Logo: React.FC<Props> = ({ logoClasses, ...props }) => {
  return (
    <Link href="/">
      <a
        className="flex items-center justify-between md:transition md:hover:opacity-75"
        {...props}
      >
        <div className="mr-4">
          <RHLogo
            className={`fill-eerie-black dark:fill-white ${logoClasses}`}
          />
        </div>
        <div className="hidden h-6 text-2xl font-display font-bold sm:block">
          blog
        </div>
      </a>
    </Link>
  );
};
