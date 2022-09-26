import { FC } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { LayoutProps } from "./layout.types";
import "./styles.css";
import { Carousel } from "../components/Carousel";

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Carousel />
      <div className="wrapper">{children}</div>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
