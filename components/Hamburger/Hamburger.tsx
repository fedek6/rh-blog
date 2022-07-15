import React from "react";
import Icon from "./icon.svg";

type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Hamburger: React.FC<Props> = ({ ...props }) => {
  return (
    <button className="cursor-pointer" {...props}>
      <Icon className="fill-eerie-black dark:fill-white h-12 w-12" />
    </button>
  );
};
