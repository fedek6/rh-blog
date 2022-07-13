import * as React from "react";
import { Container, InnerContainer } from "./Layout.styles";
import { bodyClasses } from "@/config/theme";

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  React.useEffect(() => {
    bodyClasses.map((c) => document.body.classList.add(c));
  });

  return (
    <Container>
      <InnerContainer>{children}</InnerContainer>
    </Container>
  );
};
