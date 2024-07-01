import { Link } from "react-router-dom";
import { Button } from "./shadcn-ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./shadcn-ui/dropdown-menu";
import { CircleUserRound, RouteIcon } from "lucide-react";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="z-10 sticky top-0 flex h-16 items-center gap-4 border-b bg-white px-4 md:px-6">
      <nav className="flex-col gap-6 text-lg font-medium flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-3xl font-semibold md:text-base"
        >
          <RouteIcon className="w-6 h-6" />
          RoadMapper
        </Link>
      </nav>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <div className="ml-auto">
          <SearchBar />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUserRound className="w-8 h-8 text-gray-500" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                localStorage.setItem("isAnon", "false");
              }}
            >
              <Link to="/login">Sign Out</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
