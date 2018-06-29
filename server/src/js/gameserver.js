console.log("class GameServer loaded")
class GameServer{
    constructor(server){
        this.server = server;
        this.entitys = [];
        this.connectedPlayer = [];

        this.targetFrames = 60;

        setInterval(this.update.bind(this), 1000/this.targetFrames);

        this.loadMap();
    }

    setController(controller){
        if(this.controller){
            this.server.onError();
        }
        this.controller = controller;
    }

    addEntity(entity){
        if(this.entitys[entity.id]){
            this.server.onError();
        } else {
            this.entitys[entity.id] = entity
        }
    }

    loadMap(key){
        this.addEntity(new Entity(Math.random(), 50, 50));
    }

    clientConnected(id){
        this.log(id + ' | connected to GameServer')
    }

    clientDisconnected(id){

    }

    update(deltaTime){
        this.controller.updateClients();
    }

    validatePackage(){

    }

    log(message){
        console.log(message);
    }
}

module.exports = GameServer;