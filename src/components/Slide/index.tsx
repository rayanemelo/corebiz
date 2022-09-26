import React, { FC } from "react";
import "./styles.css";
import { SlideProps } from "./slide.types";

export const Slide: FC<SlideProps> = ({ children }) => {
  return <div className="slide">{children}</div>;
};
