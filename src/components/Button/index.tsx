import React, { FC } from "react";
import { ButtonProps } from "./button.types";
import "./styles.css";

export const Button: FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="button-component">
      {text}
    </button>
  );
};
