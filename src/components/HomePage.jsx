import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";

export default function HomePage() {
  let [cards, setCards] = useState([]);

  // Load cards on first visit
  useEffect(() => {
    if (localStorage.getItem("cards") === undefined) {
      localStorage.setItem("cards", "[]");
    } else {
      setCards(JSON.parse(localStorage.getItem("cards")));
    }
    // TODO: replace with db
  }, []);
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1">
        <Sidebar cards={cards} />
      </div>
      <div className="col-span-4">
        <Outlet context={[cards, setCards]} />
      </div>
    </div>
  );
}