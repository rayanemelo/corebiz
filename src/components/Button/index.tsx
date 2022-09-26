import React, { FC } from "react";
import Loader from "../Loader";
import { ButtonProps } from "./button.types";
import "./styles.css";

export const Button: FC<ButtonProps> = ({ text, onClick, disabled }) => {
  return (
    <button onClick={onClick} className="button-component" disabled={disabled}>
      {disabled ? <Loader /> : <> {text}</>}
    </button>
  );
};
