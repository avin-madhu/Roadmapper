import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { ThemeProvider } from "./components/theme-provider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
   <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
 </ThemeProvider>
);
