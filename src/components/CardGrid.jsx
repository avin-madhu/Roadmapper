import { useEffect, useState } from "react";
import Roadmap from "./Roadmap";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./shadcn-ui/card";

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
            onClick={() => setCurrentCard(index)}
            className="hover:bg-gray-200 hover:shadow-lg cursor-pointer"
          >
            <CardHeader>
              <CardTitle>{card.cardTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{card.cardDesc}</p>
            </CardContent>
            <CardFooter>
              <div className="text-sm font-bold text-gray-600">
                {card.status ? "Completed" : "In Progress"}
              </div>
            </CardFooter>
          </Card>
        );
      })}
      <Card
        onClick={() => setCurrentCard(-1)}
        className="hover:bg-gray-200 hover:shadow-lg cursor-pointer"
      >
        <CardHeader></CardHeader>
        <CardContent>
          <div className="text-[5em] font-extrabold text-gray-400 text-center">
            <p>+</p>
          </div>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}
