import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(() => {
    const data = JSON.parse(localStorage.getItem("progress"));
    return data ? data : 0;
  });
  const [color, setColor] = useState("red");

  useEffect(() => {
    if (count < 40) {
      setColor("red");
    } else if (count >= 40 && count < 80) {
      setColor("orange");
    } else {
      setColor("green");
    }
    localStorage.setItem("progress", JSON.stringify(count));
  }, [count]);

  function increment() {
    if (count < 100) {
      setCount(count + 10);
    }
  }
  function decrement() {
    if (count > 0) {
      setCount(count - 10);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 p-4">
      <h1 className="text-2xl font-bold mb-6 text-gray-800 underline">
        Progress Bar
      </h1>

      <div className="bg-amber-100 p-6 rounded-lg shadow-md">
        {/* Progress bar with original inline styles preserved */}
        <div
          style={{
            backgroundColor: "gray",
            position: "relative",
            textAlign: "center",
            height: "30px",
            width: "200px",
            border: "1px solid",
            borderRadius: "1rem",
            marginBlock: "1rem",
            overflowX: "hidden",
          }}
        >
          <span
            style={{
              position: "absolute",
              zIndex: "2",
              left: "45%",
              color: "white",
            }}
          >
            {count}%
          </span>

          <div
            id="testBgColor"
            style={{
              backgroundColor: `${color}`,
              transform: `translateX(${count - 100}%)`,
              transition: "0.5s ease",
              height: "100%",
              borderRadius: "1rem",
            }}
          ></div>
        </div>

        <div className="flex space-x-4 mt-4 justify-center">
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors cursor-pointer"
            onClick={decrement}
          >
            -10%
          </button>

          <button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors cursor-pointer"
            onClick={increment}
          >
            +10%
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
