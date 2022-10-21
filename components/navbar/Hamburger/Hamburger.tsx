import React from "react";
import { IconButton } from "@/components/common/IconButton";
import Icon from "./icon.svg";

type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const ICON_CLASSES = "fill-eerie-black dark:fill-white h-12 w-12";

export const Hamburger: React.FC<Props> = ({ ...props }) => {
  return (
    <IconButton {...props}>
      <Icon className={ICON_CLASSES} />
    </IconButton>
  );
};
