import { useState } from "react";
import CountriesList from "./router_countriesList";
import SearchBar from "./search-bar";
import SelectMenu from "./select-menu";
import "../style/proj2.css";
import { useOutletContext } from "react-router-dom";
import { ThemeContext } from "../contexts/themeContext";
import { useContext } from "react";
import { UseTheme } from "../hooks/useTheme";

export default function Home() {
  const [query, setQuery] = useState("");
  // const [isDark] = useOutletContext();
  // const [isDark] = useContext(ThemeContext);

  const [isDark] = UseTheme();

  // const a = useContext(ThemeContext);
  // console.log(a);

  return (
    <>
      <main className={`${isDark ? "dark" : ""}`}>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery} />
          <SelectMenu setQuery={setQuery} />
        </div>
        {query === "unmount" ? "" : <CountriesList query={query} />}
      </main>
    </>
  );
}
