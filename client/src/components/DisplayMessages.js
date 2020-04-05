import React from 'react';
import '../index.css';
import ScrollTopToBottom from 'react-scroll-to-bottom';
import Message from './Message.js';

const DisplayMessages = ({messages, name}) =>(
    <ScrollTopToBottom>
        {messages.map((message, i) => <div key={i}><Message message={message} name={name}  /></div>)}
    </ScrollTopToBottom>
)

export default DisplayMessages;