import { CartState } from "../../context/Context";

import { ButtonProps } from "./counter-button.types";
import "./styles.css";

export const CounterButton = ({ text }: ButtonProps) => {
  const { addCart } = CartState();

  return (
    <button onClick={() => addCart()} className="counter-button">
      {text}
    </button>
  );
};
