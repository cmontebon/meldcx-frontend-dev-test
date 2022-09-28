import styled from "styled-components";

const StyledButton = styled.button<{ width?: string }>`
  background: #fff;
  padding: 10px 20px;
  border: 1px solid #d4d4d4;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  margin: 5px;
  width: ${({ width }) => width || "auto"};

  &:hover {
    opacity: 0.5;
  }

  &.primary {
    background: #368ea6;
    color: white;
  }

  &.error {
    background: #f18c8e;
  }
`;

type ButtonProps = {
  onClick?: () => void;
  className?: "primary" | "error";
  type?: "button" | "submit";
  isLoading?: boolean;
  text: string;
  width?: string;
};

const Button = ({
  className,
  isLoading,
  width,
  text = "",
  type = "button",
  onClick = () => {},
}: ButtonProps) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <StyledButton
      type={type}
      onClick={handleClick}
      className={className}
      disabled={isLoading && false}
      width={width}
    >
      {isLoading && (
        <>
          <i className="fa fa-circle-o-notch fa-spin"></i>
          &nbsp;
        </>
      )}
      {text}
    </StyledButton>
  );
};

export default Button;
