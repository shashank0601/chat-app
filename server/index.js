const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const router = require('./router')

const PORT = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
const io = socketio(server);
app.use(router)

io.on('connection',(socket) =>{
    console.log('New connection in app');
    socket.on('join',({user,chatroom})=>{
        console.log(user, chatroom)
    })
    socket.on('disconnect',()=>{
        console.log('User has left');
    })
})


server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
