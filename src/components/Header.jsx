import { Link } from "react-router-dom";
import { Button } from "./shadcn-ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./shadcn-ui/dropdown-menu";
import { CircleUserRound, RouteIcon } from "lucide-react";
import SearchBar from "./SearchBar";
import { ModeToggle } from "./mode-toggle";
import { ThemeProvider } from "./theme-provider";

export default function Header() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <header className="z-10 sticky top-0 flex h-16 items-center gap-4 border-b px-4 md:px-6">
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
          <div className="ml-0">
            <SearchBar />
          </div>
          <div className="ml-auto">
            <ModeToggle />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUserRound className="w-8 h-8 text-gray-500" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={() => {
                  localStorage.setItem("isAnon", "false");
                }}
              >
                <Link to="/profile-page">Account</Link>
              </DropdownMenuItem>
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
    </ThemeProvider>
  );
}
