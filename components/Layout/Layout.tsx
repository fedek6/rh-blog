import * as React from "react";
import { Container } from "./Layout.styles";

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => (
  <Container>{children}</Container>
);
