import tw from "tailwind-styled-components";

type DotProps = {
  $active: boolean;
};

export const Dot = tw.div`
  ${(p: DotProps) =>
    p.$active ? "translate-x-[100%] bg-eerie-black" : "bg-white"}

  dot
  absolute
  left-1
  top-1
  w-6
  h-6
  rounded-full
  transition
`;

export const Background = tw.div`
  block
  bg-dark-blue-gray-400
  w-14
  h-8
  rounded-full
`;
