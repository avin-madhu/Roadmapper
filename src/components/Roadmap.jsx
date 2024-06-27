import { useState, useEffect } from "react";
import Prompter from "./Prompter";
import RoadmapList from "./RoadmapList";

export default function Roadmap({ cardId }) {
  const [goals, setGoals] = useState({ data: [], cardId: 0 });

  useEffect(() => {
    // Load goals on first visit
    console.log(cardId);
    if (cardId !== -1) {
      console.log(JSON.parse(localStorage.getItem("goalsArray")));
      setGoals(
        JSON.parse(localStorage.getItem("goalsArray")).filter(
          (goals) => goals.cardId === cardId
        )[0]
      );
    }
  }, [cardId, setGoals]);

  return (
    <div className="w-screen flex flex-col items-center">
      <Prompter setGoals={setGoals} />
      <RoadmapList goals={goals} setGoals={setGoals} />
    </div>
  );
}
