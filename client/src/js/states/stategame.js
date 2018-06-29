class StateGame{
    constructor(gameClient){
        this.gameClient = gameClient;
        this.phaser = gameClient.phaser;
        this.entitys = [];
    }

    preload(){
        this.phaser.load.sprite('default', 'src/assets/default.png');
    }

    create(){
        this.phaser.stage.backgroundColor = 0xf2c65e;
    }

    addEntity(entityData){
        if(this.entitys[entityData.id]){
            console.log("error");
        } else {
            sprite = this.phaser.add.sprite(entityData.pos.x, entityData.pos.y, entityData.key)
            this.entitys[entityData.id] = sprite;
        }
    }

    update(){

    }

    updateEntitys(entityData){
        for(entity in EntityData){
            if(this.entitys[entity.id]){
                this.addEntity(entity);
            }
        }
    }
}

StateGame.name = "game";