import * as React from "react";
import Link from "next/link";
import RHLogo from "./logo.svg";

type Props = {
  logoClasses: string;
};

type NativeProps = React.ComponentPropsWithoutRef<"a">;

export const Logo: React.FC<Props & NativeProps> = ({
  logoClasses,
  ...props
}) => {
  return (
    <Link href="/">
      <a className="flex items-center justify-between" {...props}>
        <div className="mr-4">
          <RHLogo
            className={`fill-eerie-black dark:fill-white ${logoClasses}`}
          />
        </div>
        <div className="hidden h-6 text-2xl font-semibold sm:block">blog</div>
      </a>
    </Link>
  );
};
