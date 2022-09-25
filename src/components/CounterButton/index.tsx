import axios from "axios";
import React, { FC, useContext } from "react";
import { CartState } from "../../context/Context";

import { ButtonProps } from "./counter-button.types";
import "./styles.css";

export const CounterButton: FC<ButtonProps> = ({ text }) => {
  const { addCart } = CartState();

  return (
    <button onClick={() => addCart()} className="counter-button">
      {text}
    </button>
  );
};
