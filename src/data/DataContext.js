import React, { useState, createContext, useEffect } from "react";
import UserData from "./UserData";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [users, setUsers] = useState(UserData);
  const [messages, setMessages] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [mergedData, setMergedData] = useState([]);

  // Fetching full names from users
  const fullNames = users.map((user) => user.fullname);

  // Creating an array of messages for each user
  const userMessages = users.map((user) => ({
    user: user.fullname,
    messages: [{ text: "Hello" }],
  }));

  console.log(mergedData);

  useEffect(() => {
    const storedMergedData = localStorage.getItem("mergedData");
    console.log(storedMergedData);
    if (storedMergedData) {
      const parsedData = JSON.parse(storedMergedData);
      const mergedDataWithFiles = parsedData.map((data) => {
        const messagesWithFiles = data.messages.map((message) => {
          if (message.file) {
            const fileData = message.file;
            const file = new File([], fileData.name, {
              type: fileData.type,
              lastModified: fileData.lastModified,
            });
            return { ...message, file };
          }
          return message;
        });
        return { ...data, messages: messagesWithFiles };
      });
      setMergedData(mergedDataWithFiles);
    } else {
      setMergedData(userMessages);
    }
  }, []);

  useEffect(() => {
    const storedMergedData = localStorage.getItem("mergedData");
    console.log(storedMergedData);
    if (storedMergedData) {
      const parsedData = JSON.parse(storedMergedData);
      const mergedDataWithFiles = parsedData.map((data) => {
        const messagesWithFiles = data.messages.map((message) => {
          if (message.file && Object.keys(message.file).length > 0) {
            // Convert the stored file data back to a File object
            const file = new File([], message.file.name, {
              type: message.file.type,
              lastModified: message.file.lastModified,
            });
            return { ...message, file };
          }
          return message;
        });
        return { ...data, messages: messagesWithFiles };
      });
      setMergedData(mergedDataWithFiles);
    } else {
      setMergedData(userMessages);
    }
  }, []);
  

  const contextValue = {
    users,
    setUsers,
    messages,
    setMessages,
    selectedUsers,
    setSelectedUsers,
    fullNames,
    mergedData,
    setMergedData,
    addUserMessage: (userIndex, newMessage) => {
      setMergedData((prevData) => {
        const updatedData = [...prevData];
        updatedData[userIndex].messages.push(newMessage);
        return updatedData;
      });
    },
  };

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
