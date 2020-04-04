import React,{useState,useEffect} from 'react';
import io from 'socket.io-client';
import queryString from 'query-string';

let socket;

const Chat = ({location}) =>{
    const [user,setUser] = useState('');
    const [chatroom,setChatroom] = useState('');
    const SERVER_ENDPOINT = 'localhost:5000';

    useEffect(()=>{
        const {user,chatroom} = queryString.parse(location.search);
        socket=io(SERVER_ENDPOINT)

        setUser(user);
        setChatroom(chatroom);
        socket.emit('join',{user,chatroom});
    }, [SERVER_ENDPOINT, location.search]);
    return(
        <h1>Chat</h1>
    )
}

export default Chat;