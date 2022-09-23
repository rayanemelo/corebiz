import React, { FC } from "react";
import "./styles.css";
import { DrawerProps } from "./drawer.types";
import { FiUser, FiX } from "react-icons/fi";

export const Drawer: FC<DrawerProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && <div className="mask" onClick={onClose} />}
      <div className="drawer">
        <div className="close">
          <FiX onClick={onClose} />
        </div>
        <div className="user">
          <FiUser style={{ fontSize: 20 }} />
          <p>Minha Conta</p>
        </div>
      </div>
    </>
  );
};
