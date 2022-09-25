import axios from "axios";
import React, { useEffect, useState } from "react";
import { CounterButton } from "../CounterButton";
import "./styles.css";
import { IoStarOutline, IoStarSharp } from "react-icons/io5";

const CardProduct = () => {
  const [products, setProducts] = useState<any[]>([]);
  console.log("products: ", products);

  useEffect(() => {
    axios
      .get("https://corebiz-test.herokuapp.com/api/v1/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, []);

  const formatPrice: any = (price: any) => {
    const value = price.toString();
    const result =
      value?.substr(0, value?.length - 2) + "," + value?.substr(-2);
    return result;
  };

  const renderRatings = (stars: number) => {
    return (
      <div className="ratings">
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <>
              {ratingValue <= stars ? (
                <IoStarSharp color="#F8475F" size={15} />
              ) : (
                <IoStarOutline color="#F8475F" size={15} />
              )}
            </>
          );
        })}
      </div>
    );
  };

  return (
    <div className="card-product">
      {products.map((item) => {
        return (
          <div>
            <div className="container-tag">
              <img src={item.imageUrl} alt={item.productName} />
              {item.listPrice && (
                <div className="tag">
                  <p>OFF</p>
                </div>
              )}
            </div>
            <div className="info">
              <h3>{item.productName}</h3>
              {renderRatings(item.stars)}
              {item.listPrice && (
                <p className="list-price">
                  de R${formatPrice(item?.listPrice)}
                </p>
              )}

              <p className="price">
                por <span>R${formatPrice(item.price)}</span>
              </p>
              <p className="installments">
                {item.installments.map((i: any) => (
                  <span>
                    ou em {i.quantity}x de R${formatPrice(i.value)}
                  </span>
                ))}
              </p>
              <div className="button">
                <CounterButton text="comprar" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardProduct;
