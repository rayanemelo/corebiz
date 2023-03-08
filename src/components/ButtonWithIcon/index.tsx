import { ButtonProps } from "./button.types";
import "./styles.css";

export const ButtonWithIcon = ({ icon, text }: ButtonProps) => {
  return (
    <button className="button-icon">
      {icon}
      {text}
    </button>
  );
};
