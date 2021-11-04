class Develop extends Phaser.Scene{
    constructor(){
        super("Develop");
    }

    create(){
        this.add.text(20,20, "Testing scene.");
    }
}