import tw from "tailwind-styled-components";

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
  md:hidden
`;
