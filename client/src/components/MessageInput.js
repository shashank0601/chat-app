import React from 'react';
import '../index.css';
import closeIcon from '../icons/closeIcon.png';
import onlineIcon from '../icons/onlineIcon.png';

const MessageInput = ({message, setMessage, sendMessage}) =>(
    <form className='form'>
        <input className='input' 
        type='text' placeholder='Type your message...' 
        value={message} 
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={(event) => event.key === 'Enter' ? sendMessage(event) :null } />
        <button className='sendButton' onClick={(event) => sendMessage(event)}>Send</button>
    </form>
)

export default MessageInput;