class Ectoplasm extends Phaser.Scene{
    constructor(){
        super("Ectoplasm");
    }

    preload(){

    }

    create(){
        this.add.text(20,20, "Ectoplasm minigame, Press s to switch.");
        this.gauze1 = new Clickable(this, 100, 100, 'image');

        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    }
    update(){
        if(Phaser.Input.Keyboard.JustDown(keyS)){
            this.scene.start('Photo');
        }
        this.gauze1.update();
    }
}