import "../assets/css/App.css";
import Header from "./Header";
import { ThemeProvider } from "./theme-provider"
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    if (!localStorage.getItem("isAnon")) {
      localStorage.setItem("isAnon", false);
    }
  }, []);

  return (
    <div>
       <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
       <Header />
       <Outlet />
      </ThemeProvider>
    </div>
  );
}
