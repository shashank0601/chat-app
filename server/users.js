const users = [];

const addUser = ({ id, name, chatroom }) => {
  name = name.trim().toLowerCase();
  chatroom = chatroom.trim().toLowerCase();

  const existingUser = users.find((user) => user.chatroom === chatroom && user.name === name);

  if(!name || !chatroom) return { error: 'Username and chatroom are required.' };
  if(existingUser) return { error: 'Username is taken.' };

  const user = { id, name, chatroom };

  users.push(user);

  return { user };
}

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if(index !== -1) return users.splice(index, 1)[0];
}

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInChatroom = (chatroom) => users.filter((user) => user.chatroom === chatroom);

module.exports = { addUser, removeUser, getUser, getUsersInChatroom };