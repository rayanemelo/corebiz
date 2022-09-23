import React, { FC } from "react";
import { ButtonWithIcon } from "../ButtonWithIcon";
import "./styles.css";
import { FaEnvelope, FaHeadphones } from "react-icons/fa";
import logoCorebiz from "../../assets/logo-corebiz.png";
import logoVtex from "../../assets/logo-vtex.png";

export const Footer: FC<any> = () => {
  return (
    <footer>
      <div className="container">
        <div className="location">
          <h1>Localização</h1>
          <p>
            Avenida Andrômeda, 2000. Bloco 6 e 8 <br />
            Alphavile SP
            <br />
            brasil@corebiz.ag
            <br />
            +55 11 3090 1039
          </p>
        </div>
        <div className="buttons">
          <ButtonWithIcon
            icon={<FaEnvelope style={{ fontSize: 17, marginRight: 21 }} />}
            text="ENTRE EM CONTATO"
          />
          <ButtonWithIcon
            icon={<FaHeadphones style={{ fontSize: 24 }} />}
            text="FALE COM O NOSSO CONSULTOR ONLINE"
          />
        </div>
        <div className="logos">
          <div>
            <p>Created by</p>
            <img src={logoCorebiz} alt="Logo Corebiz" />
          </div>
          <div>
            <p>Powered by</p>
            <img src={logoVtex} alt="Logo Vtex" />
          </div>
        </div>
      </div>
    </footer>
  );
};
