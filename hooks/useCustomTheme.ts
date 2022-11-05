import { useTheme } from "next-themes";

export const useCustomTheme = (): [
  isDark: boolean,
  handleThemeSwitch: () => void
] => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const isDark = theme === "dark" || resolvedTheme === "dark";

  const handleThemeSwitch = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return [isDark, handleThemeSwitch];
};
