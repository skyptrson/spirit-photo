class Menu extends Phaser.Scene{
    constructor(){
        super("Menu");
    }
    preload(){
        this.load.image("MenuScreen", "./assets/menuimage.png");
    }
    create(){
        this.menuBG = this.add.image(0, 0, 'MenuScreen');
        this.menuBG.setOrigin(0,0);

        keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(keySpace)){
            this.scene.start('Ectoplasm');
        }
    }
}