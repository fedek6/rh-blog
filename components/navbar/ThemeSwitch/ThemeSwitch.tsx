import React from "react";
import { Container } from "./ThemeSwitch.styles";
import { useTheme } from "next-themes";
import { Switch } from "@/components/common/Switch";

type Props = {};

export const ThemeSwitch: React.FC<Props> = ({ ...props }) => {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // Prevent hydration error
  React.useEffect(() => setMounted(true), []);

  const isDark = theme === "dark" || resolvedTheme === "dark";

  const handleThemeSwitch = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <Container {...props}>
      {mounted && (
        <Switch
          isChecked={isDark}
          onChange={handleThemeSwitch}
          aria-label="Change theme"
        />
      )}
    </Container>
  );
};
