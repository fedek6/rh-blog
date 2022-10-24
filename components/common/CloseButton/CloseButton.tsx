import React from "react";
import { IconButton } from "@/components/common/IconButton";
import IconClose from "./icon-close.svg";

type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const CloseButton: React.FC<Props> = ({ ...props }) => {
  return (
    <IconButton {...props}>
      <IconClose
        className="fill-eerie-black dark:fill-platinum-100 h-5 w-5"
        role="img"
      />
    </IconButton>
  );
};
