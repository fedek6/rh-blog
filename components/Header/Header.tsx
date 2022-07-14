import React from "react";
import { Container, NavContainer } from "./Header.styles";
import { Logo } from "@/components/Logo";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import { SITE_META } from "@/config/meta";
import { Menu } from "@/components/Menu";

type Props = {};

const items = [
  {
    href: "/",
    name: "Test",
  },
  {
    href: "/",
    name: "Test 2",
    external: true,
  },
];

export const Header: React.FC<Props> = () => {
  return (
    <Container>
      <Logo logoClasses="h-8 md:h-12" aria-label={SITE_META.name} />

      <NavContainer>
        <Menu items={items} className="flex space-x-4" />
        <ThemeSwitch />
      </NavContainer>
    </Container>
  );
};
