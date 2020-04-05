import React,{useState,useEffect} from 'react';
import io from 'socket.io-client';
import queryString from 'query-string';
import InfoTag from './InfoTag.js';
import MessageInput from './MessageInput.js';
import DisplayMessages from './DisplayMessages.js';

let socket;

const Chat = ({location}) =>{
    const [name, setName] = useState('');
    const [chatroom, setChatroom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const SERVER_ENDPOINT = 'localhost:5000';

    useEffect(()=>{
        const {name,chatroom} = queryString.parse(location.search);
        socket=io(SERVER_ENDPOINT)

        setName(name);
        setChatroom(chatroom);
        socket.emit('join',{name,chatroom},()=>{

        });

        //This return function is equivalent to componentDidUnmount. It connects to socket disconnect action on server index.js.
        return () =>{
            socket.emit('disconnect');
            socket.off();
        }
    }, [SERVER_ENDPOINT, location.search]);

    useEffect(()=>{
        socket.on('message', (message)=>{
            setMessages([...messages,message]);
        })
    }, [messages]);

    const sendMessage = (event) =>{
        event.preventDefault();
        if(message){
            socket.emit('sendMessage', message, ()=> setMessage(''));
        }
    }

    console.log(message, messages);

    return(
        <div className='outerContainer'>
            <div className='container'>
                <InfoTag chatroom={chatroom} />
                <DisplayMessages messages={messages} name={name}/>
                <MessageInput message={message} setMessage={setMessage} sendMessage={sendMessage} />
                {/* <input value={message} 
                onChange={(event)=>setMessage(event.target.value)} 
                onKeyPress={(event)  => event.key === 'Enter' ? sendMessage(event) : null } /> */}
            </div> 
        </div>
    )
}

export default Chat;