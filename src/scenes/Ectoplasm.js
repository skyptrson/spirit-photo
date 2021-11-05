class Ectoplasm extends Phaser.Scene{
    constructor(){
        super("Ectoplasm");
    }

    preload(){

    }

    create(){
        this.add.text(20,20, "Ectoplasm scene.");
    }
    update(){
        this.scene.start('Photo');
    }
}