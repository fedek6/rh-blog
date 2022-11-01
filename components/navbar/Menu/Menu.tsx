import React, { ComponentType } from "react";
import { uniqueId } from "@/utils/uniqueId";
import type { HybridLink } from "@/components/common/HybridLink";

type Props = {
  items: Array<HybridLink>;
  LinkComponent: ComponentType<HybridLink>;
};

type NativeProps = React.ComponentPropsWithoutRef<"ul">;

const MenuComponent: React.FC<Props & NativeProps> = ({
  items,
  LinkComponent,
  ...props
}) => {
  return (
    <ul {...props}>
      {items.map((item) => (
        <li key={uniqueId()}>
          <LinkComponent {...item} />
        </li>
      ))}
    </ul>
  );
};

export const Menu = React.memo(MenuComponent);
