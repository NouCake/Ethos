const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const fs = require('fs');

const app = express();

const clientPath = __dirname + '/../';
const port = 12100;

app.use(express.static(clientPath));

const httpServer = http.createServer(app);
const ioserver = socketio(httpServer);


httpServer.on('error', () => {
    console.log('random error apeared');
});

httpServer.listen(port, () => {
    console.log('Server listens on port '+ port);
});

const Server = require('./src/js/server.js');
const GameServer = require('./src/js/gameserver');

const server = new Server(ioserver);
//setInterval(game.update.bind(game), 1000/25);