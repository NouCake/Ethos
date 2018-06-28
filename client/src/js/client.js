class Client{
    constructor(gameClient){
        this.state = Client.WAITING;
        this.bootTime = Date.now();
        this.serverTime = -1;
        this.gameClient = gameClient;
        this.server = io({autoConnect: false});
    }

    connectToServer(){
        this.server.connect();
        this.id = this.server.id;
        
        this.server.on('connect', this.connected.bind(this));
    }

    connected(){
        console.log('successful connected');
        this.state = Client.CONNECTED;
        this.gameClient.clientConnected();
    }


    _sendHandshake(){
        console.log("sending handshake");
        this.handshakeSeq = Math.round(Math.random() * 100);
        let data = {
            seq: this.handshakeSeq,
        }
        this.sendPackage(EVENTS.HANDSHAKE, data);
    }

    sendPackage(event, data){
        let packet = new Package(this.id, event, this.getServerTime(), data)
        this.server.emit(packet.event, packet);
        console.log(packet.event);
        console.log(packet);
    }

    getServerTime(){
        return this.serverTime;
    }

    isConnected(){
        return this.state == Client.CONNECTED;
    }

    onError(){
        console.log("ERROR");
    }
}

Client.WAITING = 0;
Client.CONNECTED = 1;