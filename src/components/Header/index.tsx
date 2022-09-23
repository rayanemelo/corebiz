import React, { FC, useState } from "react";
import { Search } from "../Search";
import "./styles.css";
import { FiUser, FiMenu, FiShoppingCart } from "react-icons/fi";
import logo from "../../assets/logo-corebiz-header.png";
import { Drawer } from "../Drawer";

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
          <div className="flex carrinho">
            <div className="my-account">
              <FiUser style={{ fontSize: 20 }} />
              <p>Minha Conta</p>
            </div>
            <div className="flex">
              <FiShoppingCart style={{ fontSize: 20 }} />
              <div className="count">1</div>
            </div>
          </div>
        </div>
      </header>
      {open && <Drawer isOpen={open} onClose={() => setOpen(!open)} />}
    </>
  );
};
