import tw from "tailwind-styled-components";

export const Container = tw.header`
  flex
  items-center
  justify-between
  py-10
`;

export const NavContainer = tw.nav`
  hidden
  md:flex
  items-center
  text-base
  leading-5
`;
