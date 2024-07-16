import "../assets/css/App.css";
import Header from "./Header";
import { ThemeProvider } from "./theme-provider";
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
        <div className="dark:bg-gray-950 dark:text-white min-h-screen">
          <Header />
          <Outlet />
        </div>
      </ThemeProvider>
    </div>
  );
}
