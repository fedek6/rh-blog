import React from "react";
import { IconButton } from "@/components/common/IconButton";
import IconBack from "./icon-back.svg";

type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const BackButton: React.FC<Props> = ({ ...props }) => {
  return (
    <IconButton {...props}>
      <IconBack
        className="fill-eerie-black dark:fill-platinum-100 w-7"
        role="img"
      />
    </IconButton>
  );
};
