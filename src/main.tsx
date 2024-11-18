import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// > css
import "@/styles/index.css";
// > router
import { RouterProvider } from "react-router-dom";
import router from "@/router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);