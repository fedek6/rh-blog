import tw from "tailwind-styled-components";

type Size = "sm" | "md" | "lg";

interface Props {
  $size?: Size;
}

export const Paragraph = tw.p<Props>`
  font-sans
  text-eerie-black

  ${({ $size }: Props) => {
    switch ($size) {
      case "sm":
        return "text-m-sm";
      case "lg":
        return "text-m-lg";
      default:
        return "text-m-base";
    }
  }}
`;
