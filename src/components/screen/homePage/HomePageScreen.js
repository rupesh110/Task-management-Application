import React, { useState, useContext } from 'react';
import { MdAccountCircle } from 'react-icons/md';
import { FiSend } from 'react-icons/fi';

import './homepage.css';
import Button from '../../component/button/Button';
import CardMessage from '../../component/card/cardmessage/CardMessage';
import CardUsers from '../../component/card/cardusers/CardUsers';
import users from '../../../data/UserData';
import { DataContext } from '../../../data/DataContext';


export default function HomePageScreen() {
  const {messages, setMessages} = useContext(DataContext);
  const [text, setText] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [user, setUser] = useState(users);
  
  const handleSend = () => {

    if (text.trim() !== '' || selectedFile) {
      const newMessage = [];
      if (text.trim() !== '') {
        newMessage.push({ text });
        setText('');
      }
      if (selectedFile) {
        newMessage.push({ file: selectedFile });
        setSelectedFile(null);
      }
      setMessages(prevMessages => [...prevMessages, ...newMessage]);
    }
  };

  
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div className='homePageContainer'>
      <div className='usersContainer'>
        <h1>Hello skjfsjaf sd</h1>
        <CardUsers users={user} />
      </div>
      <div className="displayContainer">
        <div className="displayMessage">
          <CardMessage messages={messages} />
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
