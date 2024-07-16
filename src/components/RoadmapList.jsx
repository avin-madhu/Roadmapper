import { CheckCircle, GrabIcon, XCircle } from "lucide-react";
import { List, arrayMove } from "react-movable";

export default function RoadmapList({ card, updateCard }) {
  function handleClick(index) {
    const newCard = { ...card };
    newCard.goals[index].done = !newCard.goals[index].done;
    newCard.status = newCard.goals.every((item) => item.done);
    updateCard(newCard);
  }

  return (
    <div
      className={`${
        card.goals.length > 0 ? "" : "hidden"
      } flex flex-col items-center my-2 border border-black rounded-lg p-4 w-1/2 gap-2`}
    >
      <h3 className="font-bold text-xl">Here is your roadmap !!</h3>
      <List
        lockVertically
        values={card.goals}
        onChange={({ oldIndex, newIndex }) => {
          const movedCard = { ...card };
          movedCard.goals = arrayMove(movedCard.goals, oldIndex, newIndex);
          updateCard(movedCard);
        }}
        renderList={({ children, props }) => (
          <ul className="space-y-3 list-inside w-full" {...props}>
            {children}
          </ul>
        )}
        renderItem={({ value, props }) => (
          <li
            {...props}
            onClick={() => handleClick(card.goals.indexOf(value))}
            className="flex items-center cursor-pointer gap-2 border rounded-lg p-2 hover:bg-gray-200"
          >
            {value.done ? (
              <CheckCircle className="size-4 min-w-4 text-green-500" />
            ) : (
              <XCircle className="size-4 min-w-4" />
            )}
            <p
              className={`${
                value.done ? "text-gray-500 line-through" : "text-black"
              } text-wrap`}
            >
              {value.goal}
            </p>
            <GrabIcon
              data-movable-handle
              className="size-4 min-w-4 cursor-grab ms-auto"
            />
          </li>
        )}
      />
    </div>
  );
}
