import CardProduct from "../../components/CardProduct";
import "./styles.css";

export const Home = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <h2>h2</h2>
        <h3>h3</h3>
        <h4>h4</h4>
        <h5>h5</h5>
        <h6>h6</h6>
      </div>
      <div>
        <a href="/">teste link</a>
      </div>
      <div className="home">
        <h1>Mais Vendidos</h1>
        <CardProduct />
      </div>
    </>
  );
};
