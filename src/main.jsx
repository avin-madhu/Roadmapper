import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import App from "./components/App";
import Roadmap from "./components/Roadmap";
import ErrorPage from "./components/ErrorPage";
import CardGrid from "./components/CardGrid";
import { LoginForm } from "./components/LoginForm";
import { SignUpForm } from "./components/SignUpForm";
import { ForgotPasswordForm } from "./components/ForgotPasswordForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <CardGrid />,
        loader: () => {
          if (localStorage.getItem("isAnon") === "false") {
            return redirect("/login");
          }
          return null;
        },
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
      {
        path: "cards/:cardId",
        element: <Roadmap />,
        loader: (params) => {
          const cardId = params.cardId;
          return cardId === -1 ? null : { cardId };
        },
      },
      {
        path: "cards/new",
        element: <Roadmap cardId={-1} />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
