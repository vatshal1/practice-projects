import { Outlet } from "react-router-dom";
import Header from "./header";
import { useState } from "react";
import "../style/proj2.css";
import { ThemeProvider } from "../contexts/themeContext";

export default function App() {
  //   const [isDark, setIsDark] = useState(
  //     JSON.parse(localStorage.getItem("isDarkMode"))
  //   );

  // prettier-ignore
  return (
    // <ThemeContext.Provider value="given value"> {/*//! override the 'value' given by children component.  */}
    //    <ThemeContext.Provider value={[isDark, setIsDark]}> 
    //   {/* <h1>hello ji</h1> */}
    //   <Header  />
    //   <Outlet  />
    // </ThemeContext.Provider>
    <ThemeProvider>
      <Header/>
      <Outlet/>
    </ThemeProvider>
  );
}
