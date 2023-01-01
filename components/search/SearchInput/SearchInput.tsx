import React, { useState } from "react";

import { InputError } from "@/components/form/InputError";
import { TextInput } from "@/components/form/TextInput";

interface Props {
  onChange?: (input: string) => void;
}

const validInput = (input: string) => input.length >= 3;

export const SearchInput: React.FC<Props> = ({ onChange }) => {
  const [isValid, setIsValid] = useState(false);
  const [inputValue, setInputValue] = useState("");

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

  return (
    <div>
      <TextInput
        placeholder="what you’re looking for?"
        value={inputValue}
        onChange={handleChange}
        autoComplete="false"
      />
      <InputError aria-hidden={isValid}>
        Please type at least 3 characters
      </InputError>
    </div>
  );
};
