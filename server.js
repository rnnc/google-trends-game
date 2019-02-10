const express = require('express');
const socketIO = require('socket.io');
const https = require('https');


const app = express();
const server = https.createServer(app);
const io = socketIO(server);

io.set('origins', '*:*');

io.on('connection', async (socket) => {
  console.log('Client successfully connected');

  io.emit('chat', "hello world");
})

server.listen(port, () => {
  console.log(`Backend server is running on localhost:${port}`);
})
