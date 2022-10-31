import tw from "tailwind-styled-components";

type ContainerProps = {
  $isVisible: boolean;
};

type SlidingContainerProps = {
  $slide: number;
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

  flex
  flex-col

  bg-platinum-100
  dark:bg-eerie-black-500
`;

export const SlideContainer = tw.div`
  grow
  overflow-hidden
  flex
`;

export const SlidingContainer = tw.div<SlidingContainerProps>`
  w-auto
  grow
  flex
  duration-500
  ease-in-out

  transition

  ${(p: SlidingContainerProps) =>
    p.$slide == 0 ? "translate-x-0" : "translate-x-[-50%]"}
`;

export const Slide = tw.div`
  w-screen

  px-5
  py-4
  flex
  justify-center

  bg-platinum-100
  dark:bg-eerie-black-500
`;
