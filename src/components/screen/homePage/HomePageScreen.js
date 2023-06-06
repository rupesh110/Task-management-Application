import React, { useState, useContext } from 'react';
import { MdAccountCircle } from 'react-icons/md';
import { FiSend } from 'react-icons/fi';

import './homepage.css';
import Button from '../../component/button/Button';
import CardMessage from '../../component/card/cardmessage/CardMessage';
import CardUsers from '../../component/card/cardusers/CardUsers';
import users from '../../../data/UserData';
import { DataContext } from '../../../data/DataContext';
import dataset from '../../../data/TryData'; 

export default function HomePageScreen() {
  const { messages, setMessages } = useContext(DataContext);
  const { mergedData, setMergedData } = useContext(DataContext);
  const { selectedUsers, setSelectedUsers } = useContext(DataContext);
  const [text, setText] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileURL, setSelectedFileURL] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    if (file) {
      const fileURL = URL.createObjectURL(file);
      setSelectedFileURL(fileURL);
    }
  };

  const selectedUsersMessage = mergedData.find((data) => data.user === selectedUsers);
  const selectedUserMessages = selectedUsersMessage ? selectedUsersMessage.messages : [];

  const handleSend = () => {
    if (text.trim() !== '' || selectedFile) {
      const newMessage = {};
      if (text.trim() !== '') {
        newMessage.text = text;
        setText('');
      }
      if (selectedFile) {
        newMessage.file = selectedFile;
        setSelectedFile(null);
        setSelectedFileURL(null);
      }
  
      const updatedMergedData = mergedData.map((data) => {
        if (data.user === selectedUsers) {
          return {
            ...data,
            messages: [...data.messages, newMessage],
          };
        }
        return data;
      });
  
      setMergedData(updatedMergedData); // Update mergedData state with the new message
  
      // Also, you may want to update the 'messages' state separately if required
      // const updatedMessages = messages.map((msg) => {
      //   if (msg.user === selectedUsers) {
      //     return {
      //       ...msg,
      //       messages: [...msg.messages, newMessage],
      //     };
      //   }
      //   return msg;
      // });
  
      // setMessages(updatedMessages);
    }
  };
  

  return (
    <div className='homePageContainer'>
      <div className='usersContainer'>
        <h1>Hello skjfsjaf sd</h1>
        <CardUsers users={mergedData} />
      </div>
      <div className="displayContainer">
        <div className="displayMessage">
          <CardMessage messages={selectedUserMessages} />
        </div>
        <div className='writeContent'>
          <textarea
            className='textAreaStyle'
            placeholder='Enter your message'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />

          <Button text='Send' onClick={handleSend} />
        </div>
      </div>
      <div className='randomContainer'>
      </div>
    </div>
  );
}
