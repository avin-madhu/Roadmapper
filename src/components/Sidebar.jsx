import { NavLink } from "react-router-dom";
import { Circle, CircleChevronRightIcon, CirclePlusIcon } from "lucide-react";
import { ThemeProvider } from "./theme-provider";

export default function Sidebar({ cards }) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-[calc(100vh-4rem)] flex flex-col gap-4 pt-4 ps-4 border-r">
        <p className="font-bold">Your Roadmaps</p>
        <div className="flex flex-col gap-2 p-2 ms-1">
          {cards.map((card, index) => {
            return (
              <NavLink
                key={index}
                to={`/cards/${card.cardId}`}
                className={({ isActive }) =>
                  "flex items-center gap-1 p-2 rounded-lg hover:bg-gray-100" +
                  (isActive ? " bg-gray-200 hover:bg-gray-300" : "")
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive ? (
                      <CircleChevronRightIcon className="min-w-4 min-h-4" />
                    ) : (
                      <Circle className="min-w-4 min-h-4" />
                    )}
                    <p>{card.cardTitle}</p>
                  </>
                )}
              </NavLink>
            );
          })}
          <NavLink
            to="/cards/new"
            className="flex items-center gap-1 p-2 rounded-lg hover:bg-gray-100"
          >
            <CirclePlusIcon className="min-w-4 min-h-4" />
            <p>Create a new roadmap</p>
          </NavLink>
        </div>
      </div>
    </ThemeProvider>
  );
}
