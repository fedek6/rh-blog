import React from "react";
import { Container, InnerContainer } from "./Layout.styles";
import { Header } from "@/components/Header";

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <InnerContainer>
        <Header />
        <main>{children}</main>
      </InnerContainer>
    </Container>
  );
};
