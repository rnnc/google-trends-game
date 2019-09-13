const {
  SOCKET_CONNECTED, MESSAGE_ROOM_SEND
} = require('./constants/socketEvents');;


const tempStore = {
  rooms: []
}

module.exports = (io) => {

  io.on('connection', socket => {

    socket.emit(SOCKET_CONNECTED, tempStore.rooms);

    socket.on('create', (room) => {
      socket.join(room)
    })

    socket.on(ROOM_JOIN, ({ new_room, room_id }) => {


      socket.emit(ROOMS_UPDATE)
    })

    socket.on(MESSAGE_ROOM_SEND, (data) => {

    })

    socket.on(GAME_GET_SCORE, (data) => { })

    socket.on(ROOM_LEAVE);

    socket.on('disconnect', () => { })


  })

};