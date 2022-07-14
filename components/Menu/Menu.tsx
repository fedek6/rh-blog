import React from "react";
import { HybridLink } from "@/components/HybridLink";
import { uniqueId } from "@/utils/uniqueId";

type Props = {
  items: Array<HybridLink>;
};

type NativeProps = React.ComponentPropsWithoutRef<"ul">;

export const Menu: React.FC<Props & NativeProps> = ({ items, ...props }) => {
  return (
    <ul {...props}>
      {items.map((item) => (
        <li key={uniqueId()}>
          <HybridLink {...item} />
        </li>
      ))}
    </ul>
  );
};
