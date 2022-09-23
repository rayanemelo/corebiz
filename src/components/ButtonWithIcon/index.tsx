import React, { FC } from "react";
import { ButtonProps } from "./button.types";
import "./styles.css";

export const ButtonWithIcon: FC<ButtonProps> = ({ icon, text }) => {
  return (
    <button className="button-icon">
      {icon}
      {text}
    </button>
  );
};
