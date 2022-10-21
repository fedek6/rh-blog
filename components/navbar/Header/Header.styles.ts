import tw from "tailwind-styled-components";

type NavContainerMobileProps = {
  $isVisible: boolean;
};

export const Container = tw.header`
  flex
  items-center
  justify-between
  py-4
  md:py-10
`;

export const NavContainerDesktop = tw.nav`
  hidden
  md:flex
  items-center
  text-base
  leading-5
`;

export const NavContainerMobile = tw.nav`
  ${(p: NavContainerMobileProps) =>
    p.$isVisible ? "translate-x-0" : "translate-x-full"}

  fixed
  top-0
  left-0
  z-10
  h-full
  w-full
  transform
  bg-platinum
  duration-300
  ease-in-out
  dark:bg-eerie-black
  p-4
`;
