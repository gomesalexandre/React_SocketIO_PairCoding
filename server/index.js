const config = require('./config');
const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);


io.on('connection', socket => {
  console.log('User connected');

  socket.on('disconnect', _ => {
    console.log('User disconnected');
  })
  socket.on('room', room => {
    console.log('room', room)
    socket.join(room);
  });
  socket.on('coding', data => {
    console.log("User is coding", data.room);
    io.emit('receive code', data);
  });
});


server.listen(config.port);
