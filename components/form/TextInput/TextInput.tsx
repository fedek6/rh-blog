import React, { InputHTMLAttributes } from "react";

import tw from "tailwind-styled-components";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const StyledInput = tw.input`
  border-b
  w-full
  border-eerie-black
  font-sans
  leading-184-2
  rounded-none
  bg-transparent

  py-2
  px-1

  text-m-base
  lg:text-d-base

  placeholder:text-eerie-black-200
`;

export const TextInput: React.FC<Props> = (props) => {
  return <StyledInput {...props}></StyledInput>;
};
