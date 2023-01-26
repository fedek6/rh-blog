import React, { forwardRef, useImperativeHandle, useState } from "react";

import { InputError } from "@/components/form/InputError";
import { TextInput } from "@/components/form/TextInput";

interface Props {
  onChange?: (input: string) => void;
  msg?: string;
}

export interface SearchInputHandle {
  reset: () => void;
}

const validInput = (input: string) => input.length >= 3;

// eslint-disable-next-line react/display-name
export const SearchInput = forwardRef<SearchInputHandle, Props>(
  ({ onChange, msg }, ref) => {
    const [inputValue, setInputValue] = useState("");
    const [errorMsg, setErrorMsg] = useState<string>();
    const hasMsg = !!errorMsg || !!msg;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setInputValue(value);

      if (validInput(value)) {
        onChange && onChange(value);
        setErrorMsg(undefined);
      } else {
        setErrorMsg("Please type at least 3 characters");
      }
    };

    useImperativeHandle(
      ref,
      () => {
        return {
          reset: () => setInputValue(""),
        };
      },
      []
    );

    return (
      <div>
        <TextInput
          placeholder="what you’re looking for?"
          value={inputValue}
          onChange={handleChange}
          autoComplete="false"
        />
        <InputError aria-hidden={!hasMsg}>{errorMsg || msg}</InputError>
      </div>
    );
  }
);
