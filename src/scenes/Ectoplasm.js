class Ectoplasm extends Phaser.Scene{
    constructor(){
        super("Ectoplasm");
    }

    preload(){
        this.load.image("AssistMouth", "./assetsEctoplasm/assistantMouthEmpty.png");
        this.load.image("Blank Jar", "./assetsEctoplasm/blankJar.png");
        this.load.image("First Guaze", "./assetsEctoplasm/gauze1.png");
        this.load.image("Second Guaze", "./assetsEctoplasm/gauze2.png");
        this.load.image("Third Guaze", "./assetsEctoplasm/gauze3.png");
        this.load.image("Fourth Guaze", "./assetsEctoplasm/gauze4.png");
        this.load.image("Fifth Guaze", "./assetsEctoplasm/gauze5.png");
        this.load.image("First Jar", "./assetsEctoplasm/jar1.png");
        this.load.image("Second Jar", "./assetsEctoplasm/jar2.png");
        this.load.image("Third Jar", "./assetsEctoplasm/jar3.png");
        this.load.image("Fourth Jar", "./assetsEctoplasm/jar4.png");
        this.load.image("Fifth Jar", "./assetsEctoplasm/jar5.png");
        this.load.image("Hand", "./assetsEctoplasm/playerHand.png");
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