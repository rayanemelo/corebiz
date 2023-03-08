import { createContext, useContext, useState, useEffect } from "react";

type CartProps = {
  children: React.ReactNode;
};

type CartContextProps = {
  quantity: number;
  addCart: () => void;
};

const Cart = createContext({} as CartContextProps);

export const Context = ({ children }: CartProps) => {
  const [quantity, setQuantity] = useState(0);

  function getStorageQuantity() {
    setQuantity(Number(localStorage.getItem("cart-quantity") || 0));
  }

  useEffect(() => {
    getStorageQuantity();
  }, []);

  function addCart() {
    localStorage.setItem("cart-quantity", String(quantity + 1));
    setQuantity(quantity + 1);
  }

  return (
    <Cart.Provider value={{ quantity, addCart }}>{children}</Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};
