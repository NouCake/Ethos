class StateGame{
    constructor(gameClient){
        this.gameClient = gameClient;
        this.phaser = gameClient.phaser;
        this.entitys = [];
        this.name = StateGame.name;
    }

    preload(){
        this.phaser.load.image('default', 'src/assets/default.png');
    }

    create(){
        this.phaser.stage.backgroundColor = 0xf2c65e;
    }

    addEntity(entityData){
        if(this.entitys[entityData.id]){
            console.log("error");
        } else {
            let sprite = this.phaser.add.image(entityData.pos.x, entityData.pos.y, entityData.key)
            this.entitys[entityData.id] = sprite;
            console.log('entity added');
        }
    }

    update(){

    }

    updateEntitys(entityDatas){
        for(let i in entityDatas){
            let data = entityDatas[i];
            if(!this.entitys[data.id]){
                this.addEntity(data);
            } else {
                let entity = this.entitys[data.id];
                entity.x = data.pos.x;
                entity.y = data.pos.y;
            }
        }
    }
}

StateGame.name = "game";