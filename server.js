const express = require('express');
const https = require('https');
const socketIO = require('socket.io');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

require('dotenv').config();

app.use(require('cors')());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());


const server = https.createServer(app);
const io = socketIO(server);

const nanoid = require('nanoid');

const Game = require('./Game');

/*
game_state_store = {

  room_code:{
    
  }

}
*/

/*
 
  rooms:[{id,players,newGame}]
 
 */

let game_state_store = {
  allRooms: new Map()
};

io.on('connection', async (socket) => {

  socket.on('NEW_ROOM', (init_data) => {

    game_state_store.allRooms.push[{
      room_id: nanoid(6),
      player1: { id: socket.id },
      player2: {},
    }]

  });

  socket.on('JOIN_ROOM', room_code => {

    game_state_store.allRooms.has()

  });

  // chat function 


})

server.listen(port, () => {
  console.log(`Backend server is running on localhost:${port}`);
})
