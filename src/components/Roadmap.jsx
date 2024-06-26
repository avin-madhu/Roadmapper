import { useState } from "react";
import Prompter from "./Prompter";
import RoadmapList from "./RoadmapList";

export default function Roadmap() {
  const [goals, setGoals] = useState([]);

  return (
    <div className="w-screen flex flex-col items-center">
      <Prompter setGoals={setGoals} />
      <RoadmapList goals={goals} setGoals={setGoals} />
    </div>
  );
}
