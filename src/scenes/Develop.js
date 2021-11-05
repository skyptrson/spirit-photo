class Develop extends Phaser.Scene{
    constructor(){
        super("Develop");
    }

    preload(){

    }
    
    create(){
        this.add.text(20,20, "Photo Development scene.");
    }
}