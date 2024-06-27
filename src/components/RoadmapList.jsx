export default function RoadmapList({ goals, setGoals }) {
  const checkSVG = (
    <svg
      className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
    </svg>
  );

  const uncheckSVG = (
    <svg
      className="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 flex-shrink-0"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
    </svg>
  );

  function handleCheck(index) {
    const newGoals = { ...goals };
    newGoals.data[index].done = !newGoals.data[index].done;
    setGoals(newGoals);
  }

  return (
    <div
      className={`${
        goals.data.length != 0 ? "" : "hidden"
      } flex flex-col items-center my-2 border border-black rounded-lg p-4 w-1/4 gap-2`}
    >
      <h3 className="font-bold text-xl">Here are your roadmaps</h3>
      <ul className="max-w-md space-y-1 list-inside">
        {goals.data.map((goal, index) => (
          <li
            key={index}
            onClick={() => handleCheck(index)}
            className={`${
              goal.done ? "text-gray-500 line-through" : "font-bold"
            } flex items-center cursor-pointer`}
          >
            {goal.done ? checkSVG : uncheckSVG}
            {goal.goal}
          </li>
        ))}
      </ul>
    </div>
  );
}
