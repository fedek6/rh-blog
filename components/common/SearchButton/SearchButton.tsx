import React from "react";
import { IconButton } from "@/components/common/IconButton";
import IconSearch from "./icon-search.svg";

type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const SearchButton: React.FC<Props> = ({ ...props }) => {
  return (
    <IconButton {...props}>
      <IconSearch
        className="fill-eerie-black dark:fill-platinum-100 w-7"
        role="img"
      />
    </IconButton>
  );
};
