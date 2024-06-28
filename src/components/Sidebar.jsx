import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Circle } from "lucide-react";

export default function Sidebar() {
  let [cards, setCards] = useState([]);

  // Load cards on first visit
  useEffect(() => {
    // TODO: replace with db
    if (localStorage.getItem("cards") === null) {
      localStorage.setItem(
        "cards",
        '[{ "cardId": 12345, "cardTitle": "Learn React", "cardDesc": "Something" },{ "cardId": 12346, "cardTitle": "Learn JS", "cardDesc": "Something else" }]'
      );
      setCards([
        { cardId: 12345, cardTitle: "Learn React", cardDesc: "Something" },
        { cardId: 12346, cardTitle: "Learn JS", cardDesc: "Something else" },
      ]);
    } else {
      setCards(JSON.parse(localStorage.getItem("cards")));
    }
  }, []);

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col gap-4 pt-4 ps-4 border-r">
      <p className="font-bold">Your Roadmaps</p>
      <div className="flex flex-col gap-2 p-2 ms-1">
        {cards.map((card, index) => {
          return (
            <Link
              key={index}
              to={`/cards/${card.cardId}`}
              className="flex items-center gap-1 p-2 hover:bg-gray-100"
            >
              <Circle className="w-4 h-4" />
              <p>{card.cardTitle}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
