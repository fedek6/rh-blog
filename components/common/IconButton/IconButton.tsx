import React from "react";
import tw from "tailwind-styled-components";

const Button = tw.button`
  focus:outline-double
  outline-dark-blue-gray-500
  dark:outline-max-yellow-red-500
  cursor-pointer
  border
  border-platinum-700
  dark:border-platinum-600
  rounded-lg
  h-10
  w-10
  inline-flex
  justify-center
  items-center
`;

type Props = {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const IconButton: React.FC<Props> = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};
