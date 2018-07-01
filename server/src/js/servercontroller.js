const EVENTS = require('../../../bin/events');
const Package = require('../../../bin/package');

class ServerController{
    
    constructor(server, gameServer){
        this.server = server;
        this.gameServer = gameServer;
    }

    handlePackage(packet){

    }

    updateClients(entityData){
        let data = [];
        for(let i in entityData){
            data.push(this._getEntityData(entityData[i]));
        }
        let packet = new Package(this.gameServer.id, EVENTS.ENTITYDATA, this.gameServer.getTime(), data);
        this.gameServer.connectedPlayer.forEach(player => {
            this.server.sendPackage(this.server.getSocket(player.id), packet);
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