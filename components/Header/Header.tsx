import React from "react";
import { Container } from "./Header.styles";
import { Logo } from "@/components/Logo";
import { ThemeSwitch } from "@/components/ThemeSwitch";

type Props = {};

export const Header: React.FC<Props> = () => {
  return (
    <Container>
      <Logo />
      <ThemeSwitch />
    </Container>
  );
};
