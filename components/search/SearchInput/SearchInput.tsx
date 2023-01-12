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
    const [isValid, setIsValid] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const hasMsg = !!msg;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setInputValue(value);

      if (validInput(value)) {
        setIsValid(true);
        onChange && onChange(value);
      } else {
        setIsValid(false);
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
        {!isValid ? (
          <InputError aria-hidden="false">
            Please type at least 3 characters
          </InputError>
        ) : (
          <InputError aria-hidden={!hasMsg}>{msg}</InputError>
        )}
      </div>
    );
  }
);
