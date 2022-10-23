import tw from "tailwind-styled-components";

export const Container = tw.div`
  antialiased

  bg-platinum-300
  dark:bg-eerie-black-500

  text-eerie-black
  dark:text-platinum-300
`;

export const InnerContainer = tw.div`
  flex
  h-screen
  flex-col
`;
