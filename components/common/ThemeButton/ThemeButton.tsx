import React from "react";
import tw from "tailwind-styled-components";
import { Button } from "@/components/common/Button";
import IconSun from "./icon-sun.svg";
import IconMoon from "./icon-moon.svg";

type Props = {
  isTextVisible: boolean;
  theme: "dark" | "light";
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

export const ThemeButton: React.FC<Props> = () => {
  return (
    <ExtendedIconButton>
      <span className="relative top-[0.1em]">Dark mode</span> <IconMoon />
    </ExtendedIconButton>
  );
};
