import { useEffect, useState } from "react";
import Card from "./Card";
import Roadmap from "./Roadmap";

export default function CardGrid() {
  let [cards, setCards] = useState([]);
  let [currentCard, setCurrentCard] = useState(null);

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

  return currentCard !== null ? (
    <>
      <Roadmap cardId={currentCard !== -1 ? cards[currentCard].cardId : -1} />
      <button
        onClick={() => setCurrentCard(null)}
        className="absolute bottom-1 right-1 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
      >
        Back
      </button>
    </>
  ) : (
    <div className="grid grid-cols-4 p-3 gap-3">
      {cards.map((card, index) => {
        return (
          <Card
            key={index}
            title={card.cardTitle}
            description={card.cardDesc}
            status={false}
            onClick={() => setCurrentCard(index)}
          />
        );
      })}
      <Card isNew={true} onClick={() => setCurrentCard(-1)} />
    </div>
  );
}
