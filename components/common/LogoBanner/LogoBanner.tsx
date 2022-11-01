import * as React from "react";
import Link from "next/link";
import { Logo } from "../Logo";

export const LogoBanner = () => {
  return (
    <Link href="/">
      <a className="flex items-center justify-between md:transition md:hover:opacity-75">
        <div className="mr-4">
          <Logo className="h-8 lg:h-10" />
        </div>
        <div className="hidden sm:block h-6 text-m-lg lg:text-d-lg font-display font-bold">
          blog
        </div>
      </a>
    </Link>
  );
};
