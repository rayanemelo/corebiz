import "./styles.css";
import { MdBrush, MdInvertColors, MdTitle } from "react-icons/md";
import { IoIosContrast, IoIosColorFilter, IoIosLink } from "react-icons/io";
import { IoColorFilter } from "react-icons/io5";
import { TiAdjustContrast } from "react-icons/ti";
import { useEffect, useState } from "react";
import { ImBold } from "react-icons/im";
export const ColorEffect = () => {
  const colorEffect = [
    {
      id: 1,
      name: "Sépia",
      icon: <MdBrush size={24} />,
    },
    {
      id: 2,
      name: "Contraste",
      icon: <TiAdjustContrast size={24} />,
    },
    {
      id: 3,
      name: "Monocromático",
      icon: <MdInvertColors size={24} />,
    },
    {
      id: 4,
      name: "Inverter Cores",
      icon: <IoIosContrast size={24} />,
    },
    {
      id: 5,
      name: "Baixa Saturação",
      icon: <IoIosColorFilter size={24} />,
    },
    {
      id: 6,
      name: "Alta Saturação",
      icon: <IoColorFilter size={24} />,
    },
  ];

  const textEffect = [
    {
      id: 1,
      name: "Destacar Título",
      icon: <MdTitle />,
    },
    {
      id: 2,
      name: "Destacar Link",
      icon: <IoIosLink />,
    },
    {
      id: 3,
      name: "Texto Negrito",
      icon: <ImBold />,
    },
  ];

  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedText, setSelectedText] = useState(0);

  const getColorEffect = (key: number) => {
    setSelectedColor(key);

    switch (key) {
      case 1:
        document.body.style.filter = "sepia(100%)";
        break;
      case 2:
        document.body.style.filter = "contrast(200%)";
        break;
      case 3:
        document.body.style.filter = "grayscale(100%)";
        break;
      case 4:
        document.body.style.filter = "invert(100%)";
        break;
      case 5:
        document.body.style.filter = "saturate(30%)";
        break;
      case 6:
        document.body.style.filter = "saturate(300%)";
        break;
      default:
        document.body.style.filter = "none";
        break;
    }
  };

  const getTextEffect = (key: number) => {
    setSelectedText(key);

    if (key === 1) {
      const h1 = document.querySelectorAll("h1");
      h1.forEach((h1) => {
        h1.style.backgroundColor = "#c6f710";
      });

      const h2 = document.querySelectorAll("h2");
      h2.forEach((h2) => {
        h2.style.backgroundColor = "#c6f710";
      });

      const h3 = document.querySelectorAll("h3");
      h3.forEach((h3) => {
        h3.style.backgroundColor = "#c6f710";
      });

      const h4 = document.querySelectorAll("h4");
      h4.forEach((h4) => {
        h4.style.backgroundColor = "#c6f710";
      });

      const h5 = document.querySelectorAll("h5");
      h5.forEach((h5) => {
        h5.style.backgroundColor = "#c6f710";
      });

      const h6 = document.querySelectorAll("h6");
      h6.forEach((h6) => {
        h6.style.backgroundColor = "#c6f710";
      });
    }

    if (key === 2) {
      const a = document.querySelectorAll("a");
      a.forEach((a) => {
        a.style.backgroundColor = "#07a8d4";
      });
    }

    if (key === 3) {
    }
  };

  return (
    <>
      <ul className="color_effects">
        {colorEffect.map((color) => (
          <li
            key={color.id}
            onClick={() => getColorEffect(color.id)}
            style={{
              border: selectedColor === color.id ? "2px solid #000" : "",
            }}
          >
            <div>{color.icon}</div>
            <p>{color.name}</p>
          </li>
        ))}
      </ul>

      <ul className="color_effects">
        {textEffect.map((text) => (
          <li
            key={text.id}
            onClick={() => getTextEffect(text.id)}
            style={{ border: selectedText === text.id ? "2px solid #000" : "" }}
          >
            <div>{text.icon}</div>
            <p>{text.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
