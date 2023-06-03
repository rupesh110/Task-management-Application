import React, { useState, createContext, useContext } from "react";
import UserData from "./UserData";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [users, setUsers] = useState(UserData);
  const [messages, setMessages] = useState(["messages1"]);

 
  const contextValue = {
    users,
    setUsers,
    messages, // Update variable name here
    setMessages // Update variable name here
  };
  

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
