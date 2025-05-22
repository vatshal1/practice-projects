import { useEffect, useState } from "react";

function App() {
  const [showIndices, setShowIndices] = useState(() => {
    const index = localStorage.getItem("index");
    return index ? JSON.parse(index) : [];
  });

  useEffect(() => {
    localStorage.setItem("index", JSON.stringify(showIndices));
  }, [showIndices]);

  const accordion = [
    {
      title: "Javascript Basics",
      content: "Provides Interactivity to the Browser",
    },
    {
      title: "React.js Overview",
      content:
        "Provide efficient DOM manipulation and makes single page application",
    },
    {
      title: "Node.js",
      content: "Basics of server-side development with Node.js",
    },
    {
      title: "Full stack development",
      content: "This tech stack is helpful to create full website",
    },
  ];

  function clickHandler(index) {
    console.log("clicked", index);

    if (showIndices.includes(index)) {
      const updatedIndices = showIndices.filter((i) => i != index);
      setShowIndices(updatedIndices);
    } else {
      setShowIndices([...showIndices, index]);
    }
  }

  return !accordion.length ? (
    <h1 className="  text-2xl text-red-500">No Accordion Available</h1>
  ) : (
    <div className="mt-2 ml-2 w-8/12 border rounded-md bg-gray-100">
      {accordion.map((list, i) => {
        return (
          <div key={i} className="border rounded-md m-4 p-2 bg-gray-300  ">
            <h1
              onClick={() => clickHandler(i)}
              className="border rounded-md p-1 flex justify-between hover:bg-gray-200"
            >
              {list.title}
              <span className="cursor-pointer">
                {`${showIndices.includes(i) ? "👆" : "👇"}`}
              </span>
            </h1>
            {showIndices.includes(i) && (
              <p className="border-b border-x rounded-md px-2">
                {list.content}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default App;
