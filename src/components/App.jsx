import "../assets/css/App.css";
import Header from "./Header";
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
      <Header />
      <Outlet />
    </div>
  );
}
