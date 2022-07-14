import React from "react";
import { Container, NavContainer } from "./Header.styles";
import { Logo } from "@/components/Logo";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import { SITE_META } from "@/config/meta";
import { Menu } from "@/components/Menu";
import { MAIN_MENU } from "@/config/menu";

type Props = {};

export const Header: React.FC<Props> = () => {
  return (
    <Container>
      <Logo logoClasses="h-8 md:h-12" aria-label={SITE_META.name} />

      <NavContainer>
        <Menu items={MAIN_MENU} className="flex space-x-4" />
        <ThemeSwitch />
      </NavContainer>
    </Container>
  );
};
