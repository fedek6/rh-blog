import tw from "tailwind-styled-components";

type NavContainerMobileProps = {
  $isVisible: boolean;
};

export const Container = tw.header`
  h-16
  lg:h-20
  px-5
  lg:px-20
  flex
  items-center
  justify-between
  bg-platinum-100
  dark:bg-eerie-black-500
`;

export const NavContainerDesktop = tw.nav`
  hidden
  lg:flex
  items-center
  text-base
  leading-5
`;

export const NavContainerMobile = tw.div`
  ${(p: NavContainerMobileProps) =>
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
`;
