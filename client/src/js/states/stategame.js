class StateGame{
    constructor(gameClient){
        this.gameClient = gameClient;
        this.phaser = gameClient.phaser;
    }

    preload(){

    }

    create(){
        this.phaser.stage.backgroundColor = 0xf2c65e;

    }
}

StateGame.name = "game";