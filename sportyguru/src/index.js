import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { UnivProvider } from "./currentUniv";
import { LoadingProvider } from "./loadingContext";
import { DataProvider } from "./dataContext";

ReactDOM.render(
  <React.StrictMode>
  <LoadingProvider>
    <DataProvider>
      <UnivProvider>
        <App/>
      </UnivProvider>
    </DataProvider>
  </LoadingProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
