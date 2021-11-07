class Develop extends Phaser.Scene{
    constructor(){
        super("Develop");
    }

    preload(){
        this.load.image("Client", "./assetsExposureGame/clientStill.png");
        this.load.image("Ghost", "./assetsExposureGame/ghost.png");
        this.load.image("AssistWrong", "./assetsExposureGame/wrongPictureAssisstant.png");
        this.load.image("ChickenWrong", "./assetsExposureGame/wrongPictureChicken.png");

    }
    
    create(){
        this.add.text(20,20, "Photo Development mini-game, Press s to switch.");
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(keyS)){
            this.scene.start('Ectoplasm');
        }
    }
}