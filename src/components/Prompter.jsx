import { useRef } from "react";
import { supabase } from "../supabase";

export default function Prompter({ setGoals }) {
  const promptField = useRef(null);

  function getRoadmap() {
    const prompt = promptField.current.value;
    console.log(prompt);

    // Call the API to get the roadmap
    supabase.functions
      .invoke("gemini", {
        body: {
          query: prompt,
        },
      })
      .then((response) => {
        if (response.error) {
          console.error(response.error);
        } else {
          const data = JSON.parse(response.data).map((goal) => {
            return { goal, done: false };
          });
          console.log(data);
          setGoals(data);
        }
      });
  }

  return (
    <div className="flex flex-col items-center w-1/4 gap-1 mt-3">
      <p className="font-bold text-center">
        What roadmap do you want to generate?
      </p>
      <textarea
        id="prompt-field"
        ref={promptField}
        className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-50"
      />
      <button
        onClick={getRoadmap}
        className="w-1/4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
      >
        Create
      </button>
    </div>
  );
}