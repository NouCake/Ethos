console.log("class GameServer loaded")
class GameServer{
    constructor(server){
        this.server = server;
        this.entitys = [];
        this.connectedPlayer = [];

        this.targetFrames = 60;

        setInterval(this.update.bind(this), 1000/this.targetFrames);
    }

    clientConnected(id){

    }

    clientDisconnected(id){

    }

    update(deltaTime){
        console.log(deltaTime);
    }

    validatePackage(){

    }
}

module.exports = GameServer;