class Develop extends Phaser.Scene{
    constructor(){
        super("Develop");
    }

    preload(){

    }
    
    create(){
        this.add.text(20,20, "Photo Development scene, Press s to switch scene.");
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(keyS)){
            this.scene.start('Ectoplasm');
        }
    }
}