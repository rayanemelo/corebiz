import Loader from "../Loader";
import { ButtonProps } from "./button.types";
import "./styles.css";

export const Button = ({ text, onClick, disabled }: ButtonProps) => {
  return (
    <button onClick={onClick} className="button-component" disabled={disabled}>
      {disabled ? <Loader /> : <> {text}</>}
    </button>
  );
};
