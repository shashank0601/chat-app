import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from 'socket.io-client';

import Messages from './DisplayMessages.js';
import InfoTag from './InfoTag.js';
import MessageInput from './MessageInput.js';

import '../index.css';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [chatroom, setChatroom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const SERVER_ENDPOINT = 'localhost:5000';

  useEffect(() => {
    const { name, chatroom } = queryString.parse(location.search);

    socket = io(SERVER_ENDPOINT);

    setChatroom(chatroom);
    setName(name)

    socket.emit('join', { name, chatroom }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [SERVER_ENDPOINT, location.search]);
  
  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    
    socket.on("chatroomData", ({ users }) => {
      setUsers(users);
    });
}, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  return (
    <div className="outerContainer">
      <div className="container">
          <InfoTag chatroom={chatroom} />
          <Messages messages={messages} name={name} />
          <MessageInput message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
    </div>
  );
}

export default Chat;
