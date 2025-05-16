import { useState, useEffect } from "react";
import ChipComponent from "./chipCompent";

function App() {
  const [text, setText] = useState("");

  const [chips, setChips] = useState(() => {
    const savedChips = localStorage.getItem("chips");
    return savedChips ? JSON.parse(savedChips) : [];
  });

  useEffect(() => {
    localStorage.setItem("chips", JSON.stringify(chips));
  }, [chips]);

  function submitHandler(e) {
    e.preventDefault();
    if (text.trim()) {
      console.log(text);
      setChips((prev) => [...prev, text]);
      setText("");
    }
  }

  return (
    <>
      <div className="text-center  mt-2 ">
        <h1 className="text-3xl font-bold mt-2">Chips Input</h1>

        <form onSubmit={submitHandler}>
          <input
            onChange={(e) => setText(e.target.value)}
            value={text}
            type="text"
            placeholder="Enter the text"
            className="border outline-none rounded-sm pl-1 py-1 my-4"
          />
        </form>

        {chips.map((chip, i) => (
          <ChipComponent
            chip={chip}
            chips={chips}
            setChips={setChips}
            key={i}
            index={i}
          />
        ))}
      </div>
    </>
  );
}

export default App;
