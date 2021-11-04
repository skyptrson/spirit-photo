class Photo extends Phaser.Scene{
    constructor(){
        super("Photo");
    }

    create(){
        this.add.text(20,20, "Testing scene.");
    }
}