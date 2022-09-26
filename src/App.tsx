import { Context } from "./context/Context";
import Layout from "./layout";
import { Home } from "./pages/Home";

const App = () => {
  return (
    <Context>
      <Layout>{/* <Home /> */}</Layout>
    </Context>
  );
};

export default App;
