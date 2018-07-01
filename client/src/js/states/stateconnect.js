class StateConnect{
    constructor(gameClient){
        this.gameClient = gameClient;
        this.phaser = gameClient.phaser;
        this.name = StateConnect.name;
    }

    preload(){
        this.phaser.load.spritesheet('fox', 'src/assets/fox.png', 50, 50);
    }

    create(){
        this.phaser.stage.backgroundColor = 0x32c65e;

        let fox = this.phaser.add.sprite(this.phaser.width/2, this.phaser.height/2 - 50, 'fox');
        fox.anchor.set(0.5, 0.5);
        fox.animations.add('idle', [0, 1, 2, 3, 4, 5, 6]);
        fox.play('idle', 12, true);

        this.text = this.phaser.add.text(this.phaser.width/2, this.phaser.height/2, "NO TEXT", {font: 'Aine', fontSize: '32px', fill: 'WHITE'})
        this.showText("watiting for connect");

        this.gameClient.client.connectToServer();
    }

    update(){
        if(this.gameClient.client.isConnected()){
            this.showText("Connected!")
        }
    }

    showText(text){
        this.text.text = text;
        this.text.x = this.phaser.width/2 - this.text.width/2;
        this.text.y = this.phaser.height/2+25 - this.text.height/2;
    }

}

StateConnect.name = 'connect'