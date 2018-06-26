class Server{
    constructor(ioserver){
        this.connectedClients = [];
        this.ioserver = ioserver;

    }

    onConnect(socket){
        console.log(socket.id + ' | connected');
        this._addClient(socket);
        socket.on('error', this.onError);
        socket.on('disconnect', this.onDisconnect);
    }

    onDisconnect(socket){

    }

    onReceivePackage(package){

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
