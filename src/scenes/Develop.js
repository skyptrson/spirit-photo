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
        this.load.image("Invisible", "./UniversialAssets/InvisibleCollision.png");
    }
    create(){      
        this.add.text(15,15, "Double Exposure Press s to switch.");
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.client = this.add.sprite(game.config.width/1.38, game.config.height/2, 'Client').setScale(.462)
    this.add.text(15,15, "Double Exposure!");
    this.add.text(15,35, "Drag The Ghost Portrait Into The Correct Position!");
    this.add.text(15,55, "Press s to switch.");
    this.invisible = this.add.sprite(game.config.width/1.38, game.config.height/2, 'Invisible').setScale(.5)
    this.invisible.setVisible(false)
    // Draggable Ghost
    this.ghost = this.add.sprite(game.config.width, game.config.height *.50, 'Ghost').setScale(.05);
    this.ghost.inputEnabled = true;
    this.ghost.setInteractive({ draggable: true });
    this.input.setDraggable(this.ghost);
    this.input.on('drag', function (pointer, gameObject, dragX, dragY,) {
        gameObject.x = dragX;
        gameObject.y = dragY;
    });
     //Invisible Win Box
     this.photoZone = this.add.zone(game.config.width*.51,90).setSize(220,270).setOrigin(0,0);
     this.physics.world.enable(this.photoZone);
     this.photoZone.body.moves = false;

    // Win Condition Set Up
    this.GameWin = false
    //Timer
    this.clock = this.time.delayedCall(10000, () =>{
        this.add.text(game.config.width/2,game.config.height/2, "The Client Caught You!", this.textConfig).setOrigin(0.5, 0.5);
        console.log("Game over.");
        this.time.delayedCall(2000, ()=>{
            this.scene.start('Menu');
        })
    });
}
    update(){

        if(Phaser.Input.Keyboard.JustDown(keyS)){
            this.scene.start('Ectoplasm');
        }
    if(this.checkCollision(this.ghost,this.invisible)){
        this.GameWin = true 
        this.add.text(game.config.width/2,game.config.height/2, "You Fooled The Client", this.textConfig).setOrigin(0.5, 0.5);
    }

    }
    checkCollision() { if (this.ghost < this.invisible + this.invisible.width && 
        this.ghost + this.ghost.width > this.invisible) {
            return true;
    } else {
        return false;
    }
    }
}