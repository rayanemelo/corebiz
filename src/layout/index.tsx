import { FC } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { LayoutProps } from "./layout.types";
import "./styles.css";

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="wrapper">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
