import { Input } from "./shadcn-ui/input";
import { Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  const cards = JSON.parse(localStorage.getItem("cards"));

  useEffect(() => {
    const focus = () => {
      setIsOpen(true);
    };

    const blur = (e) => {
      if (dropdownRef.current.contains(e.relatedTarget)) return;
      setIsOpen(false);
    };

    const onInput = () => {
      const val = inputRef.current.value;
      setSearchQuery(val);
    };

    let cur = -1;
    const keyPressed = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      } else if (e.key === "ArrowDown") {
        const dropdown = dropdownRef.current;
        const links = dropdown.querySelectorAll("a");
        if (cur > 0) {
          links[cur].classList.remove("bg-gray-300");
        }
        if (cur < links.length - 1) {
          cur++;
          links[cur].classList.add("bg-gray-300");
        }
      }
    };

    const resetDropdown = () => {
      inputRef.current.value = "";
    };

    const inp = inputRef.current;
    const dropdown = dropdownRef.current;

    inp.addEventListener("focus", focus);
    inp.addEventListener("focusout", blur);
    inp.addEventListener("input", onInput);
    inp.addEventListener("keydown", keyPressed);
    dropdown.addEventListener("click", resetDropdown);

    return () => {
      inp.removeEventListener("focus", focus);
      inp.removeEventListener("blur", blur);
      inp.removeEventListener("input", onInput);
      dropdown.removeEventListener("click", resetDropdown);
    };
  }, [searchQuery]);

  return (
    <div className="relative">
      <form className="flex-1 sm:flex-initial">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            ref={inputRef}
            type="search"
            placeholder="Search Roadmaps..."
            className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] focus:rounded-b-none focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
      </form>
      <div
        ref={dropdownRef}
        className={`${
          isOpen ? "" : "hidden"
        } p-2 absolute bg-gray-100 w-full rounded-b-lg`}
      >
        <ul className="list-none w-full">
          {cards
            .filter((card) => card.cardTitle.startsWith(searchQuery))
            .map((card) => (
              <li key={card.cardId} className="w-full">
                <Link
                  to={`/cards/${card.cardId}`}
                  className="w-full m-1 p-1 hover:bg-gray-300 focus-visible:bg-gray-300"
                >
                  {card.cardTitle}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
