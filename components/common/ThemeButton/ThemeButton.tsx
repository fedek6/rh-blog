import React from "react";
import tw from "tailwind-styled-components";
import { Button } from "@/components/common/Button";
import { useCustomTheme } from "@/hooks/useCustomTheme";
import IconSun from "./icon-sun.svg";
import IconMoon from "./icon-moon.svg";

type Props = {};

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

export const ThemeButton: React.FC<Props> = () => {
  const [mounted, setMounted] = React.useState(false);
  const [isDark, handleThemeSwitch] = useCustomTheme();

  // Prevent hydration error
  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <ExtendedIconButton onClick={handleThemeSwitch}>
      {isDark ? LightBtn : DarkBtn}
    </ExtendedIconButton>
  );
};
