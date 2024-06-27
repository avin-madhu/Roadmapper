export default function Card({ title, description, status, isNew, onClick }) {
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

  return (
    <div
      onClick={onClick}
      className="w-full h-[250px] flex flex-col justify-between rounded-lg border p-2 bg-slate-100 shadow-sm hover:bg-slate-200 hover:shadow-md"
    >
      {isNew ? (
        <h1 className="font-extrabold text-gray-600 text-[7em] text-center cursor-default">
          +
        </h1>
      ) : (
        <>
          <h1 className="font-bold text-2xl">{title}</h1>
          <p>{description}</p>
          <div className="flex justify-end items-center">
            {status ? checkSVG : uncheckSVG}
            {status ? "Completed" : "In Progress"}
          </div>
        </>
      )}
    </div>
  );
}
