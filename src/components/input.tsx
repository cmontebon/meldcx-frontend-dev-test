import { SetStateAction } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Dispatch } from "react";
import styled from "styled-components";

const StyledInput = styled.input<{ width?: string }>`
  padding: 10px 5px;
  margin: 5px auto;
  width: ${({ width }) => width || "auto"};
  border-radius: 5px;
  border: 1px solid #d4d4d4;

  &.error {
    border: 1px solid #f18c8e;
  }
  &:focus {
    outline: none;
    border: 1px solid #80cff1;
  }
`;

type InputProps = {
  type?: "text" | "password";
  width?: string;
  error?: boolean;
  setValue: Dispatch<SetStateAction<string>>;
  value: string;
  autofocus?: boolean;
  placeholder?: string;
};

const Input = ({
  width,
  error,
  setValue,
  value,
  autofocus,
  placeholder,
  type = "text",
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autofocus && inputRef?.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <StyledInput
      type={type}
      width={width}
      className={error ? "error" : ""}
      value={value}
      ref={inputRef}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
    ></StyledInput>
  );
};

export default Input;
