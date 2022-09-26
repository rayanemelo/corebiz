import CardProduct from "../../components/CardProduct";
import { Slide } from "../../components/Slide";
import "./styles.css";
export const Home = () => {
  return (
    <div className="home">
      <h1>Mais Vendidos</h1>

      <CardProduct />
    </div>
  );
};
