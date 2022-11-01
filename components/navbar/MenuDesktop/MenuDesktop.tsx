import React, { ComponentType } from "react";
import { ThemeSwitch } from "@/components/navbar/ThemeSwitch";
import { Menu } from "@/components/navbar/Menu";
import { HybridLink } from "@/components/common/HybridLink";
import { MAIN_MENU } from "@/config/menu";

const Link: ComponentType<HybridLink> = (props) => (
  <HybridLink
    className="text-d-sm text-eerie-black font-sans font-bold p-4 hover:text-english-vermillion dark:text-platinum-300 hover:dark:text-max-yellow-red"
    {...props}
  />
);

export const MenuDesktop: React.FC = React.memo(function OverlayMenu() {
  React.useEffect(() => console.count("DesktopMenu"));
  return (
    <>
      <Menu items={MAIN_MENU} LinkComponent={Link} className="flex space-x-4" />
      <ThemeSwitch />
    </>
  );
});
