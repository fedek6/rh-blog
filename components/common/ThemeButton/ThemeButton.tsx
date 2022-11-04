import React from "react";
import tw from "tailwind-styled-components";
import { Button } from "@/components/common/Button";
import IconSun from "./icon-sun.svg";
import IconMoon from "./icon-moon.svg";

type Props = {
  isTextVisible: boolean;
  theme?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const ExtendedIconButton = tw(Button)`
  px-4
  text-eerie-black
  font-display
  font-bold
  text-m-lg
 dark:text-platinum-300
  gap-2
`;

const DarkBtn = (
  <>
    <span className="relative top-[0.1em]">Dark mode</span> <IconMoon />
  </>
);

const LightBtn = (
  <>
    <span className="relative top-[0.1em]">Light mode</span> <IconSun />
  </>
);

export const ThemeButton: React.FC<Props> = ({ theme, onClick }) => {
  return (
    <ExtendedIconButton onClick={onClick}>
      {theme == "dark" ? LightBtn : DarkBtn}
    </ExtendedIconButton>
  );
};
