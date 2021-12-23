import { Toaster } from "react-hot-toast";
import GlobalStyle from "./GlobalStyle/style";
import Routes from "./routes";

function App() {
  return (
    <>
      <GlobalStyle />
      <Toaster />
      <Routes />
    </>
  );
}

export default App;
