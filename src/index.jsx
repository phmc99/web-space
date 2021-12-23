import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import Providers from "./providers";

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Providers>
  </React.StrictMode>,
  document.getElementById("root")
);
