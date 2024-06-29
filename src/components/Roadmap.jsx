import { useEffect, useState } from "react";
import Prompter from "./Prompter";
import RoadmapList from "./RoadmapList";
import { useLoaderData, useOutletContext } from "react-router-dom";

export default function Roadmap() {
  const { card } = useLoaderData();
  const [cardState, setCardState] = useState(card);
  const [cards, setCards] = useOutletContext();

  function updateCard(update) {
    let _cards = [...cards];
    const index = _cards.findIndex((card) => card.cardId === update.cardId);
    _cards[index] = update;
    localStorage.setItem("cards", JSON.stringify(_cards));
    setCardState(update);
    setCards(_cards);
  }

  useEffect(() => {
    setCardState(card);
  }, [card]);
  return (
    <div className="w-full flex flex-col items-center">
      <Prompter
        updateCardState={setCardState}
        cards={cards}
        setCards={setCards}
      />
      <RoadmapList card={cardState} updateCard={updateCard} />
    </div>
  );
}
