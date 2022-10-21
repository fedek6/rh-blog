import React from "react";
import { Container, InnerContainer } from "./DefaultLayout.styles";
import { Header } from "@/components/navbar/Header";

type Props = {
  children: React.ReactNode;
};

export const DefaultLayout: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <InnerContainer>
        <Header />
        <main>{children}</main>
      </InnerContainer>
    </Container>
  );
};
