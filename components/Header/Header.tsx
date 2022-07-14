import React from "react";
import { Container } from "./Header.styles";
import { Logo } from "@/components/Logo";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import { siteMeta } from "@/config/meta";

type Props = {};

export const Header: React.FC<Props> = () => {
  return (
    <Container>
      <Logo logoClasses="h-8 md:h-12" aria-label={siteMeta.name} />
      <ThemeSwitch />
    </Container>
  );
};
