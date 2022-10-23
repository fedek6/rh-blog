import * as React from "react";
import RHLogo from "./logo.svg";

export interface LogoProps {
  className?: string;
}

export const Logo: React.FC<
  LogoProps & React.HTMLAttributes<HTMLOrSVGElement>
> = ({ className, ...props }) => {
  return (
    <RHLogo
      className={`fill-eerie-black dark:fill-platinum-100 w-auto ${className}`}
      role="img"
      aria-label="RealHero logo"
      {...props}
    />
  );
};
