import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import { ThemeProvider } from "./theme-provider"
export default function HomePage() {
  let [cards, setCards] = useState([]);

  // Load cards on first visit
  useEffect(() => {
    if (localStorage.getItem("cards") === null) {
      localStorage.setItem("cards", "[]");
    } else {
      setCards(JSON.parse(localStorage.getItem("cards")));
    }
    // TODO: replace with db
  }, []);
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="grid grid-cols-5">
        <div className="col-span-1">
          <Sidebar cards={cards} />
        </div>
        <div className="col-span-4">
          <Outlet context={[cards, setCards]} />
        </div>
      </div>
    </ThemeProvider>
  );
}
