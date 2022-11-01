import React, { ComponentType } from "react";
import { uniqueId } from "@/utils/uniqueId";
import type { HybridLink } from "@/components/common/HybridLink";

type Props = {
  items: Array<HybridLink>;
  LinkComponent: ComponentType<HybridLink>;
};

type NativeProps = React.ComponentPropsWithoutRef<"ul">;

const LINK_CLASSES = [
  "text-eerie-black",
  "font-display",
  "font-bold",
  "p-4",
  "hover:text-english-vermillion",
  "dark:text-platinum-100",
  "hover:dark:text-max-yellow-red",
];

export const Menu: React.FC<Props & NativeProps> = ({
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
