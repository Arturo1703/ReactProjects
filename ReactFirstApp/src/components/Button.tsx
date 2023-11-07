import React from "react";

interface AlertProps {
  text: string;
  color?: "primary" | "secondary";
  onClickedButton: (item: string) => void;
}

const Button = ({ text, color = "secondary", onClickedButton }: AlertProps) => {
  return (
    <button
      type="button"
      className={"btn btn-" + color}
      onClick={() => {
        onClickedButton(color);
      }}
    >
      {text}
    </button>
  );
};

export default Button;
