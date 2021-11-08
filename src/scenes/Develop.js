class Develop extends Phaser.Scene{
    constructor(){
        super("Develop");
    }

    preload(){
        this.load.image("Client", "./assetsExposureGame/clientStill.png");
        this.load.image("Ghost", "./assetsExposureGame/ghost.png");
        this.load.image("AssistWrong", "./assetsExposureGame/wrongPictureAssisstant.png");
        this.load.image("ChickenWrong", "./assetsExposureGame/wrongPictureChicken.png");
        this.load.image("UniGhostLife", "./UniversialAssets/ghostLife.png");
        this.load.image("UniTimerBar", "./UniversialAssets/timerBar.png");
        this.load.image("UniTimerEmpty", "./UniversialAssets/timerEmpty.png");
    }
    
    create(){
        this.add.text(20,20, "Photo Development mini-game, Press s to switch.");
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.photoZone = this.add.zone(game.config.width*.31,0).setSize(250,275).setOrigin(0,0);
    this.physics.world.enable(this.photoZone);
    this.photoZone.body.moves = false;

    // Client Still sprite
    this.cam = this.add.sprite(game.config.width/3, game.config.height *.70, 'clientStill').setScale(.1);
// Draggable Ghost
    this.ghost = this.add.sprite(game.config.width/3, game.config.height *.70, 'ghost').setScale(.1);
    this.ghost.setTo(0.5,0.5);
    this.ghost.inputEnabled = true;
    this.ghost.enableDrag (true);
    };
    // area
    
    update(){
        if(Phaser.Input.Keyboard.JustDown(keyS)){
            this.scene.start('Ectoplasm');
        }
    }
}