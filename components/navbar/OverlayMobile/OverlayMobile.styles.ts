import tw from "tailwind-styled-components";

type ContainerProps = {
  $isVisible: boolean;
};

export const Container = tw.div<ContainerProps>`
  ${(p: ContainerProps) =>
    p.$isVisible ? "translate-x-0" : "translate-x-full"}

  fixed
  top-0
  left-0
  z-10
  h-full
  w-full
  transform
  duration-300
  ease-in-out
  p-4

  bg-platinum-100
  dark:bg-eerie-black-500
`;
