import React from "react";
import { Container } from "./ThemeSwitch.styles";
import { useTheme } from "next-themes";

type Props = {};

export const ThemeSwitch: React.FC<Props> = ({ ...props }) => {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // Prevent hydration error
  React.useEffect(() => setMounted(true), []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" || resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <Container {...props}>
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4"
        onClick={handleThemeSwitch}
      >
        {mounted && theme}
      </button>
    </Container>
  );
};
