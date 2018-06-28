console.log("class Server loaded");

class Server{
    constructor(ioserver){
        this.connectedClients = [];
        this.ioserver = ioserver;
        this.game = new GameServer(this);
        
    }

    onConnect(socket){
        console.log(socket.id + ' | connected');
        this._addClient(socket);
        socket.on('error', this.onError);
        socket.on('disconnect', this.onDisconnect);

        game.clientConnected(socket.id);
    }

    onDisconnect(socket){

    }

    onReceivePackage(packet){

    }

    onError(error){
        console.log('PLS HELP\n'+error);
    }

    _addClient(socket){
        this.connectedClients.add(socket);
    }

    _initConnectionMethods(){
        this.ioserver.on('connection', this.onConnect.bind(this));
        this.ioserver.on('error', this.onError.bind(this));
    }


}

module.exports = Server;
