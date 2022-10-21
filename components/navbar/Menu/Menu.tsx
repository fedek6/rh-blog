import React from "react";
import { HybridLink } from "@/components/common/HybridLink";
import { uniqueId } from "@/utils/uniqueId";

type Props = {
  items: Array<HybridLink>;
};

type NativeProps = React.ComponentPropsWithoutRef<"ul">;

const LINK_CLASSES = [
  "text-eerie-black",
  "font-display",
  "font-bold",
  "hover:text-english-vermillion",
  "dark:text-white",
  "hover:dark:text-max-yellow-red",
  "p-4",
];

export const Menu: React.FC<Props & NativeProps> = ({ items, ...props }) => {
  return (
    <ul {...props}>
      {items.map((item) => (
        <li key={uniqueId()}>
          <HybridLink {...item} className={LINK_CLASSES.join(" ")} />
        </li>
      ))}
    </ul>
  );
};
