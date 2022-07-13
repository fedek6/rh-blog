import React from "react";
import { Container } from "./Header.styles";
import { Logo } from "@/components/Logo";

type Props = {};

export const Header: React.FC<Props> = () => {
  return (
    <Container>
      <Logo />
    </Container>
  );
};
