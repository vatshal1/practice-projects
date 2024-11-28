import { createContext, useState } from "react";

// export const ThemeContext = createContext("default value "); //. no need to pass value from here as it can override when it will be used
// console.log(ThemeContext);

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDarkMode"))
  );

  return (
    <ThemeContext.Provider value={[isDark, setIsDark]}>
      {children}
    </ThemeContext.Provider>
  );
}
