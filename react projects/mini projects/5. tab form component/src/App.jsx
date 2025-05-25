import { useState } from "react";

function App() {
  const [showIndex, setShowIndex] = useState(0);

  const tabs = [
    { title: "Tab 1", content: "This is the content of Tab 1" },
    { title: "Tab 2", content: "This is the content of Tab 2" },
    { title: "Tab 3", content: "This is the content of Tab 3" },
    { content: "This is the content of Tab 4" },
    { title: "Tab 5" },
  ];

  function clickHandler(i) {
    setShowIndex(i);
  }

  return !tabs.length ? (
    <div className="text-center text-gray-500 text-xl p-4">
      No tabs available
    </div>
  ) : (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <div className="flex border-b border-gray-200 mb-6">
        {tabs.map((tab, i) => (
          <div key={i} className="mr-2">
            <button
              onClick={() => clickHandler(i)}
              className={`py-2 px-4 font-medium text-lg transition-all duration-200 cursor-pointer focus:outline-none ${
                showIndex === i
                  ? "text-blue-600 border-b-2 border-blue-500 font-semibold"
                  : "text-gray-600 hover:text-blue-500 hover:bg-gray-50"
              }`}
            >
              {tab.title ? tab.title : `Tab ${i + 1}`}
            </button>
          </div>
        ))}
      </div>

      <div className="p-5 bg-gray-50 rounded-md min-h-[150px]">
        {tabs[showIndex] && (
          <div className="text-gray-700 text-lg">
            {tabs[showIndex].content
              ? tabs[showIndex].content
              : "No content available"}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
