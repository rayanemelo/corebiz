import { Accessibility } from "./components/Accessibility";
import { Context } from "./context/Context";
import Layout from "./layout";
import { Home } from "./pages/Home";

const App = () => {
  return (
    <Context>
      <Layout>
        <Home />
      </Layout>
      <Accessibility />
    </Context>
  );
};

export default App;
