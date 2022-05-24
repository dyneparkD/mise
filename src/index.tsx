import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";
import { BookmarkContextProvider } from "./context/bookmarkContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BookmarkContextProvider>
      <App />
    </BookmarkContextProvider>
  </React.StrictMode>
);
