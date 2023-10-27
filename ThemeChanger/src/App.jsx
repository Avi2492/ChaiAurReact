import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="className fixed flex flex-wrap justify-center top-12 inset-x-0 px-2">
          <div className="className flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
            <button
              className="outline-none px-4 bg-red-600 py-1 rounded-full text-white shadow-sm"
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button
              className="outline-none px-4 bg-green-600 py-1 rounded-full text-white shadow-sm"
              onClick={() => setColor("green")}
            >
              Green
            </button>
            <button
              className="outline-none px-4 bg-blue-600 py-1 rounded-full text-white shadow-sm"
              onClick={() => setColor("blue")}
            >
              Blue
            </button>
            <button
              className="outline-none px-4 bg-orange-600 py-1 rounded-full text-white shadow-sm"
              onClick={() => setColor("orange")}
            >
              Orange
            </button>
            <button
              className="outline-none px-4 bg-pink-600 py-1 rounded-full text-white shadow-sm"
              onClick={() => setColor("pink")}
            >
              Pink
            </button>
            <button
              className="outline-none px-4 bg-yellow-400 py-1 rounded-full text-white shadow-sm"
              onClick={() => setColor("yellow")}
            >
              Yellow
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-sm bg-lime-500"
              onClick={() => setColor("lime")}
            >
              Lime
            </button>
            <button
              className="outline-none px-4 bg-black py-1 rounded-full text-white shadow-sm"
              onClick={() => setColor("red")}
            >
              Black
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
