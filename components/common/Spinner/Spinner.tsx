import IconSpinner from "./icon-spinner.svg";
import React from "react";

export const Spinner: React.FC = () => {
  return (
    <div className="inline-flex w-8 h-8">
      <IconSpinner
        className="fill-eerie-black-200 dark:fill-platinum-100 w-full h-full animate-spin"
        role="img"
      />
    </div>
  );
};
