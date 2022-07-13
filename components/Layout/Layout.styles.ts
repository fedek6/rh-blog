import tw from "tailwind-styled-components";

export const Container = tw.div`
  mx-auto
  max-w-3xl
  px-4
  sm:px-6
  xl:max-w-5xl
  xl:px-0
`;

export const InnerContainer = tw.div`
  flex
  h-screen
  flex-col
  justify-between
`;
