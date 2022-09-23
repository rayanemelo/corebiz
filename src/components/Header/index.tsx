import React, { FC, useState } from "react";
import { Search } from "../Search";
import "./styles.css";
import { FiUser, FiMenu } from "react-icons/fi";
import logo from "../../assets/logo-corebiz-header.png";
import { Drawer } from "../Drawer";
import { CountCart } from "../CountCart";

export const Header: FC<any> = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header>
        <div className="container">
          <FiMenu
            className="menu-icon"
            style={{ fontSize: 20 }}
            onClick={() => setOpen(!open)}
          />
          <img src={logo} alt="Logo Corebiz" />
          <div className="search">
            <Search placeholder="O que está procurando?" />
          </div>
          <div className="flex">
            <div className="my-account">
              <FiUser style={{ fontSize: 20 }} />
              <p>Minha Conta</p>
            </div>
            <CountCart />
          </div>
        </div>
      </header>
      {open && <Drawer isOpen={open} onClose={() => setOpen(!open)} />}
    </>
  );
};
