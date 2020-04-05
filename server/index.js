const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

const { addUser, removeUser, getUser, getUsersInChatroom } = require('./users');

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors());
app.use(router);

io.on('connect', (socket) => {
  socket.on('join', ({ name, chatroom }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, chatroom });

    if(error) return callback(error);

    socket.join(user.chatroom);

    socket.emit('message', { user: 'admin', text: `${user.name}, welcome to chatroom ${user.chatroom}.`});
    socket.broadcast.to(user.chatroom).emit('message', { user: 'admin', text: `${user.name} has joined!` });

    io.to(user.chatroom).emit('chatroomData', { chatroom: user.chatroom, users: getUsersInChatroom(user.chatroom) });

    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.chatroom).emit('message', { user: user.name, text: message });

    callback();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if(user) {
      io.to(user.chatroom).emit('message', { user: 'Admin', text: `${user.name} has left.` });
      io.to(user.chatroom).emit('chatroomData', { chatroom: user.chatroom, users: getUsersInChatroom(user.chatroom)});
    }
  })
});

server.listen(process.env.PORT || 5000, () => console.log(`Server has started.`));