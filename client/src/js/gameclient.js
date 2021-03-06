class GameClient{
    constructor(){
        this.phaser = new Phaser.Game(800, 640, Phaser.AUTO, 'game', null, false, true);

        this.phaser.state.add(StateConnect.name, new StateConnect(this));
        this.phaser.state.add(StateGame.name, new StateGame(this));

        this.phaser.state.start(StateConnect.name);
        this.state = null;
        Object.defineProperty(this, 'state', {
            get: function(){
                return this.phaser.state.getCurrentState();
            }
        });

        this.client = new Client(this);
    }

    clientConnected(){
        this.phaser.state.start(StateGame.name);
    }

    receivePackage(packet){
        if(packet.event == EVENTS.ENTITYDATA){
            if(this.state.name == StateGame.name){
                this.state.updateEntitys(packet.data);
            } else {
                console.log("currently unable to update entitys");
                console.log(this.state, StateGame.name);
            }

        } else {
            console.log("unknown event " + packet.event)
            console.log(packet);
        }
    }
}

let game;
let init = function(){
    game = new GameClient();
}