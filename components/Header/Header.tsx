import React from "react";
import { Container } from "./Header.styles";
import { Logo } from "@/components/Logo";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import { siteMeta } from "@/config/meta";

type Props = {};

export const Header: React.FC<Props> = () => {
  return (
    <Container>
      <Logo size="h-10" aria-label={siteMeta.name} />
      <ThemeSwitch />
    </Container>
  );
};
