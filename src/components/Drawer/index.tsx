import React, { FC } from "react";
import "./styles.css";
import { DrawerProps } from "./drawer.types";

export const Drawer: FC<DrawerProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && <div className="mask" onClick={onClose} />}
      <div className="drawer">
        <h1>Hello</h1>
        <button onClick={onClose}>X</button>
      </div>
    </>
  );
};
