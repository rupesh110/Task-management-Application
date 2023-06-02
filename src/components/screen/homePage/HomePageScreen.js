import React from 'react';
import { MdAccountCircle } from 'react-icons/md';
import { FiSend } from 'react-icons/fi';

import './homepage.css';
import Button from '../../component/button/Button';
import CardMessage from '../../component/card/cardmessage/CardMessage';
import CardUsers from '../../component/card/cardusers/CardUsers';
import users from '../../../data/UserData';
export default function HomePageScreen() {
  const [message, setMessage] = React.useState(["message1", "message2", "message3", "message4", "message5"]);
  const [text, setText] = React.useState('');
  const [user, setUser] = React.useState(users);

  const handleSend = () => {
    alert(user[0].id)
    if (text.trim() !== '') {
      setMessage((prevMessage) => [...prevMessage, text]);
      setText('');
    }
  };

  return (
    <div className='homePageContainer'>
      <div className='usersContainer'>
        <h1>Hello skjfsjaf sd</h1>
        <CardUsers users={user} />
      </div>
      <div className="displayContainer">
        <div className="displayMessage">
          <CardMessage messages={message} />
        </div>
        <div className='writeContent'>
          <textarea
            className='textAreaStyle'
            placeholder='Enter your message'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button text='Send' onClick={handleSend} />
        </div>
      </div>
      <div className='randomContainer'>

      </div>
    </div>
  );
}
