import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// > css
import "@/styles/index.css";
// > components
import App from "@/MacOs";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);