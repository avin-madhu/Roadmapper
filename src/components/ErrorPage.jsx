import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="h-screen flex flex-col justify-center text-center">
      <div className="font-extrabold text-gray-800 p-2">
        <p className="text-8xl">{error.status}</p>
        <p className="text-2xl">{error.statusText || error.message}</p>
      </div>
      <p className="text-lg p-2">Sorry, an unexpected error has occurred.</p>
    </div>
  );
}
