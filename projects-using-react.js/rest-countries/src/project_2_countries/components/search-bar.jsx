import React from "react";

export default function SearchBar({ setQuery }) {
  return (
    <div className="search-container">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        onChange={(e) => setQuery(e.target.value.toLowerCase())} //! this allow 'useState' to change state as we write on search and then 'value' changes
        type="text"
        placeholder="Search for a country..."
      />
    </div>
  );
}
