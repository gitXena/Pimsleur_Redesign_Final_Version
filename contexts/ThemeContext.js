//contexts/ThemeContext.js

import React, {
  createContext,
  useState,
} from "react";

export const ThemeContext =
  createContext();

export const ThemeProvider = ({
  children,
}) => {
  const [isDarkMode,
    setIsDarkMode] =
    useState(false);

  const theme = isDarkMode
    ? {
        background: "#121212",
        card: "#1E1E1E",
        text: "#FFFFFF",
        border: "#333333",
      }
    : {
        background: "#FFFFFF",
        card: "#F5F5F5",
        text: "#000000",
        border: "#E0E0E0",
      };

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
        theme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};