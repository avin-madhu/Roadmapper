import { createBrowserRouter, redirect } from "react-router-dom";
import App from "./components/App";
import Roadmap from "./components/Roadmap";
import ErrorPage from "./components/ErrorPage";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import ForgotPasswordForm from "./components/ForgotPasswordForm";
import HomePage from "./components/HomePage";
import CardGrid from "./components/CardGrid";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
        loader: () => {
          if (localStorage.getItem("isAnon") === "false") {
            return redirect("/login");
          }
          return null;
        },
        children: [
          {
            path: "",
            element: <CardGrid />,
          },
          {
            path: "cards/:cardId",
            element: <Roadmap />,
            loader: ({ params }) => {
              const cardId = JSON.parse(params.cardId);
              const allCards = JSON.parse(localStorage.getItem("cards"));
              const card = allCards.filter((card) => card.cardId === cardId)[0];

              return { card };
            },
          },
          {
            path: "cards/new",
            element: <Roadmap />,
            loader: () => {
              const newCard = {
                goals: [],
                cardId: Math.floor(Math.random() * 100000),
                cardTitle: "",
                status: false,
              };
              return { card: newCard };
            },
          },
        ],
      },
      {
        path: "login",
        element: <LoginForm />,
        loader: () => {
          if (localStorage.getItem("isAnon") === "true") {
            return redirect("/");
          }
          return null;
        },
      },
      {
        path: "sign-up",
        element: <SignUpForm />,
        loader: () => {
          if (localStorage.getItem("isAnon") === "true") {
            return redirect("/");
          }
          return null;
        },
      },
      {
        path: "forgot-password",
        element: <ForgotPasswordForm />,
        loader: () => {
          if (localStorage.getItem("isAnon") === "true") {
            return redirect("/");
          }
          return null;
        },
      },
    ],
  },
]);
