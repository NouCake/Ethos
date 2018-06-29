class ServerController{
    
    constructor(server, gameServer){
        this.server = server;
        this.gameServer = gameServer;
    }

    handlePackage(packet){

    }

    updateClients(){
        entityData = gameServer.entitys.map(this._getEntityData);
        server.connectedClients.forEach(socket => {
            socket.emit(EVENTS.ENTITYDATA, entityData);
        })
    }

    _getEntityData(entity){
        return {
            id: entity.id,
            pos: entity.pos,
            key: entity.key,
            type: entity.type
        }
    }

}

module.exports = ServerController;