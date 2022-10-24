import React from "react";
import { IconButton } from "@/components/common/IconButton";
import IconHamburger from "./icon-hamburger.svg";

type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Hamburger: React.FC<Props> = ({ ...props }) => {
  return (
    <IconButton {...props}>
      <IconHamburger
        className="fill-eerie-black dark:fill-platinum-100 h-6 w-6"
        role="img"
      />
    </IconButton>
  );
};
