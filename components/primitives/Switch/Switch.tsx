import React from "react";
import { Dot } from "./Switch.styles";
import { uniqueId } from "@/utils/uniqueId";

type Props = {
  isChecked: boolean;
  label?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Switch: React.FC<Props> = ({
  isChecked,
  label,
  onChange,
  ...props
}) => {
  const [componentId] = React.useState(uniqueId("input"));

  return (
    <label
      htmlFor={componentId}
      className="flex items-center cursor-pointer"
      {...props}
    >
      <div className="relative">
        <input
          type="checkbox"
          id={componentId}
          className="sr-only"
          defaultChecked={isChecked}
          onChange={onChange}
        />
        <div className="block bg-dark-blue-gray-400 w-14 h-8 rounded-full"></div>
        <Dot $active={isChecked} />
      </div>
      {label && <div className="ml-3 text-eerie-black">{label}</div>}
    </label>
  );
};
