import { ThemeContext } from "../contexts/themeContext";
import { useContext } from "react";

export default function Header() {
  // const [isDark, setIsDark] = theme;  //! using 'react-route'
  const [isDark, setIsDark] = useContext(ThemeContext); //! using 'Context-Api'
  return (
    <header className={`header-container ${isDark ? "dark" : ""}`}>
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <p
          className="theme-changer"
          onClick={() => {
            setIsDark(!isDark);
            localStorage.setItem("isDarkMode", !isDark);
          }}
        >
          <i className={`fa-solid fa-${isDark ? "sun" : "moon"}`} /> &nbsp;
          &nbsp; {isDark ? "Light" : "Dark"} Mode
        </p>
      </div>
    </header>
  );
}
