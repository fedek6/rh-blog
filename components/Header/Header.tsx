import React from "react";
import {
  Container,
  NavContainerDesktop,
  NavContainerMobile,
} from "./Header.styles";
import { Logo } from "@/components/Logo";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import { SITE_META } from "@/config/meta";
import { Menu } from "@/components/Menu";
import { Hamburger } from "../Hamburger";
import { MAIN_MENU } from "@/config/menu";

type Props = {};

export const Header: React.FC<Props> = () => {
  const [isMenuVisible, setIsMenuVisible] = React.useState(false);

  const handleHambugerClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <Container>
      <Logo logoClasses="h-8 md:h-12" aria-label={SITE_META.name} />
      <NavContainerDesktop>
        <Menu items={MAIN_MENU} className="flex space-x-4" />
        <ThemeSwitch />
      </NavContainerDesktop>
      <div className="md:hidden">
        <Hamburger onClick={handleHambugerClick} />
        <NavContainerMobile $isVisible={isMenuVisible}>aa</NavContainerMobile>
      </div>
    </Container>
  );
};
