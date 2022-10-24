import React from "react";
import { ThemeSwitch } from "@/components/navbar/ThemeSwitch";
import { Menu } from "@/components/navbar/Menu";
import { MAIN_MENU } from "@/config/menu";

export const MenuDesktop: React.FC = React.memo(function OverlayMenu() {
  React.useEffect(() => console.count("DesktopMenu"));
  return (
    <>
      <Menu items={MAIN_MENU} className="flex space-x-4" />
      <ThemeSwitch />
    </>
  );
});
