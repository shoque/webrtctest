const express = require('express')
const app = express()
const path = require('path')
const http = require('http');
const { Server } = require("socket.io");
const server = http.createServer(app);
const rtcServer = require('rtcmulticonnection-server') ;
const io = new Server(server);
const port = process.env.PORT || 5000
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
  rtcServer.addSocket(socket)
  console.log('a user connected');
});
server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})