
//LessonContext.js
import React, { createContext, useState } from "react";

export const LessonContext = createContext();

export const LessonProvider = ({ children }) => {
  const [selectedLesson, setSelectedLesson] = useState(null);

  return (
    <LessonContext.Provider
      value={{
        selectedLesson,
        setSelectedLesson,
      }}
    >
      {children}
    </LessonContext.Provider>
  );
};