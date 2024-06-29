import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./shadcn-ui/card";
import { Link, useOutletContext } from "react-router-dom";
import { PlusIcon, Trash2Icon } from "lucide-react";
import { useEffect } from "react";

export default function CardGrid() {
  const [cards, setCards] = useOutletContext();

  function deleteCard(cardId) {
    const newCards = cards.filter((card) => card.cardId !== cardId);
    localStorage.setItem("cards", JSON.stringify(newCards));
    setCards(newCards);
  }

  useEffect(() => {
    console.log("cards", cards);
  }, [cards]);

  return (
    <div className="grid grid-cols-4 auto-rows-fr p-3 gap-3">
      {cards.map((card, index) => {
        return (
          <Link to={`/cards/${card.cardId}`} key={index}>
            <Card
              key={index}
              className="hover:bg-gray-200 hover:shadow-lg cursor-pointer"
            >
              <CardHeader>
                <CardTitle>{card.cardTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  {card.goals.filter((goal) => goal.done).length}/
                  {card.goals.length}
                </p>
              </CardContent>
              <CardFooter>
                <div className="flex justify-between items-center w-full text-sm font-bold text-gray-600">
                  <button
                    onClick={(event) => {
                      deleteCard(card.cardId);
                      event.preventDefault();
                      event.stopPropagation();
                    }}
                  >
                    <Trash2Icon className="size-4 text-red-600" />
                  </button>
                  {card.status ? (
                    <p className="text-green-500">Completed</p>
                  ) : (
                    <p className="text-gray-500">In Progress</p>
                  )}
                </div>
              </CardFooter>
            </Card>
          </Link>
        );
      })}
      <Link to="/cards/new">
        <Card className="hover:bg-gray-200 hover:shadow-lg cursor-pointer">
          <CardHeader></CardHeader>
          <CardContent>
            <div className="flex flex-col items-center gap-2">
              <PlusIcon className="size-16 text-gray-600" />
              <p>Create a new roadmap</p>
            </div>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </Link>
    </div>
  );
}
