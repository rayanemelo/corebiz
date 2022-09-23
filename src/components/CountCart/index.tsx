import { FiShoppingCart } from "react-icons/fi";
import "./styles.css";

export const CountCart = () => {
  return (
    <>
      <div className="flex">
        <FiShoppingCart style={{ fontSize: 20 }} />
        <div className="count">1</div>
      </div>
    </>
  );
};
