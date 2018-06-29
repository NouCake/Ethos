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

Server = require('./src/js/server.js');
GameServer = require('./src/js/gameserver');
ServerController = require('./src/js/servercontroller');
EVENTS = require('../bin/events');
Point = require('../bin/point');
Entity = require('../bin/entity');
server = new Server(ioserver);