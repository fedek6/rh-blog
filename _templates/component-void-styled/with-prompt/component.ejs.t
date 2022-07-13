---
to: components/<%=name%>/<%=name%>.tsx
---
import * as React from "react";
import { Container } from "./<%=name%>.styles";

type Props = {};

export const <%=name%>: React.FC<Props> = ({ ...props }) => {
  return (
    <Container {...props}>
      Hello World
    </Container>
  );
};
