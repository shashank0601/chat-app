const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const router = require('./router');
const {addUser, removeUser, getUser, getUserInChatroom} = require('./users.js');


const PORT = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
const io = socketio(server);
app.use(router)

io.on('connection',(socket) =>{
    socket.on('join',({name,chatroom},callback)=>{
        const {error, user} = addUser({id:socket.id, name, chatroom});
        if(error) return callback(error);

        socket.emit('message', {user:'admin', text: `${user.name}, Welcome to ${user.chatroom}`});
        socket.broadcast.to(user.chatroom).emit('message',{user:'admin', text:`${user.name} has joined`});
        socket.join(user.chatroom);
        callback();
    });

    socket.on('sendMessage', (message,callback)=>{
        const user = getUser(socket.id);
        io.to(user.chatroom).emit('message', {user: user.name, message: message});
        callback();
    })

    //This connects to the return function on client when a user disconnects from the app.
    socket.on('disconnect',()=>{
        console.log('User has left');
    })
})


server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
