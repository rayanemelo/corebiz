import { CounterButton } from "../CounterButton";
import "./styles.css";
import { IoStarOutline, IoStarSharp } from "react-icons/io5";
import { Slide } from "../Slide";

const products = [
  {
    productId: "1",
    productName: "MOCASSIM TRATORADO COURO",
    stars: 5,
    imageUrl:
      "https://corello.vtexassets.com/arquivos/ids/504473/0011546022_031_1-MOCASSIM.jpg?v=637806195083970000",
    listPrice: 39999,
    price: 38999,
    installments: [
      {
        quantity: 12,
        value: 3333,
      },
    ],
  },
  {
    productId: "2",
    productName: "BOTA TRATORADA COURO",
    stars: 5,
    imageUrl:
      "https://corello.vtexassets.com/arquivos/ids/554397/0012772022_021_1-BOTA.jpg?v=638104419355570000",
    listPrice: 49999,
    price: 48999,
    installments: [
      {
        quantity: 6,
        value: 4166,
      },
    ],
  },
  {
    productId: "3",
    productName: "SANDÁLIA FISHERMAN COURO",
    stars: 5,
    imageUrl:
      "https://corello.vtexassets.com/arquivos/ids/555338/1311101010_021_1-SANDALIA.jpg?v=638107146449170000",
    listPrice: 25000,
    price: 24099,
    installments: [
      {
        quantity: 6,
        value: 4166,
      },
    ],
  },
  {
    productId: "4",
    productName: "TÊNIS FLATFORM ALTERNATIVO",
    stars: 5,
    imageUrl: "https://corello.vtexassets.com/arquivos/ids/530534/0014068074_021_1-TENIS.jpg?v=637958484711830000",
    // listPrice: 49999,
    price: 48999,
    installments: [
      {
        quantity: 6,
        value: 4166,
      },
    ],
  },
  {
    productId: "5",
    productName: "BOLSA DE OMBRO COURO VANILLA",
    stars: 5,
    imageUrl:
      "https://corello.vtexassets.com/arquivos/ids/557883/0051651179_294_1-BOLSA.jpg?v=638122617152530000",
    // listPrice: 49999,
    price: 48999,
    installments: [
      {
        quantity: 6,
        value: 4166,
      },
    ],
  }

]

const CardProduct = () => {
  /*   const [products, setProducts] = useState<any[]>([]);
  
    useEffect(() => {
      axios
        .get("https://corebiz-test.herokuapp.com/api/v1/products")
        .then((res) => {
          setProducts(res.data);
        })
        .catch((err) => {
          console.log("err: ", err);
        });
    }, []); */

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
      <Slide>
        {products.map((item) => (
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
        ))}
      </Slide>
    </div>
  );
};

export default CardProduct;
