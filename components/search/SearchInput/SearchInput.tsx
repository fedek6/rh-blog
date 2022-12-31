import React, { useState } from "react";

import { InputError } from "@/components/form/InputError";
import { TextInput } from "@/components/form/TextInput";

const validator = (input: string) => input.length >= 3;

export const SearchInput = () => {
  const [isValid, setIsValid] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
    setIsValid(validator(value));
  };

  return (
    <div>
      <TextInput
        placeholder="what you’re looking for?"
        value={inputValue}
        onChange={onChange}
      />
      <InputError aria-hidden={isValid}>
        Please type at least 3 characters
      </InputError>
    </div>
  );
};
