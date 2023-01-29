import "./index.css";

import App from "./App";
import DescriptionsProvider from "./components/DescriptionContext";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DescriptionsProvider>
      <App />
    </DescriptionsProvider>
  </React.StrictMode>
);
