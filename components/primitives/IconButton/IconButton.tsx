import React from "react";

type Props = {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const IconButton: React.FC<Props> = ({ children, ...props }) => {
  return (
    <button className="cursor-pointer" {...props}>
      {children}
    </button>
  );
};
