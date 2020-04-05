import React from 'react';

import '../index.css';

const MessageInput = ({ message, setMessage, sendMessage}) => (
  <form className='form'>
    <input
      className='input'
      type='text'
      placeholder='Type a message...'
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <button className='sendButton' onClick={e => sendMessage(e)}>Send</button>
  </form>
)

export default MessageInput;