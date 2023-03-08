import "./styles.css";
import { SlideProps } from "./slide.types";

export const Slide = ({ children }: SlideProps) => {
  return <div className="slide">{children}</div>;
};
