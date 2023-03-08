import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { LayoutProps } from "./layout.types";
import "./styles.css";
import { Carousel } from "../components/Carousel";
import { NewsLetters } from "../components/NewsLetter";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Carousel />
      <div className="wrapper">{children}</div>
      <NewsLetters />
      <Footer />
    </>
  );
};

export default Layout;
