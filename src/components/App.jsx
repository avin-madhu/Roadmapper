import "../assets/css/App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
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
      <div className="grid grid-cols-5">
        <div className="col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
