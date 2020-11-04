import React, { createContext, useState } from "react";
const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [message, setMessage] = useState("Hello!");

  return (
    <AppContext.Provider
      value={{
        message,
        setMessage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
