import React from "react";
import { Container, InnerContainer } from "./DefaultLayout.styles";
import { NavBar } from "@/components/navbar/NavBar";

type Props = {
  children: React.ReactNode;
};

export const DefaultLayout: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <InnerContainer>
        <NavBar />
        <main>{children}</main>
      </InnerContainer>
    </Container>
  );
};
