import React from "react";
import { Container } from "./ThemeSwitch.styles";
import { useCustomTheme } from "@/hooks/useCustomTheme";
import { useIsMounted } from "@/hooks/useIsMounted";
import { Switch } from "@/components/common/Switch";

type Props = {};

export const ThemeSwitch: React.FC<Props> = ({ ...props }) => {
  const isMounted = useIsMounted();
  const [isDark, handleThemeSwitch] = useCustomTheme();

  return (
    <Container {...props}>
      {isMounted && (
        <Switch
          isChecked={isDark}
          onChange={handleThemeSwitch}
          aria-label="Change theme"
        />
      )}
    </Container>
  );
};
