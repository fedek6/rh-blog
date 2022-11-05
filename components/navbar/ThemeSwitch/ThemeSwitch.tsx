import React from "react";
import { Container } from "./ThemeSwitch.styles";
import { useCustomTheme } from "@/hooks/useCustomTheme";
import { Switch } from "@/components/common/Switch";

type Props = {};

export const ThemeSwitch: React.FC<Props> = ({ ...props }) => {
  const [mounted, setMounted] = React.useState(false);
  const [isDark, handleThemeSwitch] = useCustomTheme();

  // Prevent hydration error
  React.useEffect(() => setMounted(true), []);

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
