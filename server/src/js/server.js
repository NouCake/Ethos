const GameServer = require('./gameserver');
const ServerController = require('./servercontroller');

class Server{
    constructor(ioserver){
        this.connectedClients = [];
        this.ioserver = ioserver;
        this.game = new GameServer(this);
        this.controller = new ServerController(this, this.game);
        this.game.setController(this.controller);
        this._initConnectionMethods();
    }

    onConnect(socket){
        console.log(socket.id + ' | connected to Server');
        this._addClient(socket);
        socket.on('error', this.onError);
        socket.on('disconnect', this.onDisconnect);
        socket.on('message', console.log)

        this.game.clientConnected(socket.id);
    }

    onDisconnect(socket){

    }

    onReceivePackage(packet){

    }
    
    onError(error){
        console.log('PLS HELP\n'+error);
    }

    _addClient(socket){
        this.connectedClients.push(socket);
    }

    _initConnectionMethods(){
        this.ioserver.on('connection', this.onConnect.bind(this));
        this.ioserver.on('error', this.onError.bind(this));
    }

    sendPackage(socket, packet){
        socket.emit(packet.event, packet);
    }

    getSocket(id){
        let sockets = this.connectedClients.filter(socket => id == socket.id);
        if(sockets.length > 1){
            this.server.onError();
        } else if (sockets.length == 0){
            this.server.onError('socket not found')
        } else {
            return sockets[0];
        }
    }

}

module.exports = Server;
