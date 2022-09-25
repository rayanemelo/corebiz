import { FC } from "react";
import { TiShoppingCart } from "react-icons/ti";
import "./styles.css";
import { CartState } from "../../context/Context";

export const CountCart = () => {
  const { quantity } = CartState();
  console.log("quantity: ", quantity);
  return (
    <>
      <div className="flex">
        <TiShoppingCart style={{ fontSize: 20 }} />
        <div className="count">{quantity}</div>
      </div>
    </>
  );
};