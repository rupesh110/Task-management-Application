import React, { useState, createContext } from "react";
import UserData from "./UserData";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [users, setUsers] = useState(UserData);
 
  const contextValue = {
    users,
    setUsers,
  };

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
