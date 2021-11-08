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
        this.add.text(15,15, "Double Exposure Press s to switch.");
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.client = this.add.sprite(game.config.width/1.38, game.config.height/2, 'Client').setScale(.462)
    this.add.text(15,15, "Double Exposure!");
    this.add.text(15,35, "Drag The Ghost Portrait Into The Correct Position!");
    this.add.text(15,55, "Press s to switch.");
// Draggable Ghost
    this.ghost = this.add.sprite(game.config.width/2, game.config.height *.50, 'Ghost').setScale(.1);
    this.ghost.inputEnabled = true;
    this.ghost.setInteractive({ draggable: true });
    this.input.setDraggable(this.ghost);
    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

        gameObject.x = dragX;
        gameObject.y = dragY;

    });
    this.gameTimer == 45000;    
    this.gameWon = false;
    this.clock = this.time.delayedCall(this.gameTimer, () => {
        this.add.text(game.config.width/2, game.config.height/2, 
          'GAME OVER').setOrigin(0.5);
          this.gameOver = true;
    }, null, this);
        
    };
    
    update(){
        if (this.ghost.x == 200 && this.ghost.y == 200) {
            this.gameWon = true;
        }
        if (this.gameWon == true){
            this.add.text(15,85, "Congrats You Fooled The Client! Press s to switch.");}
            else if (this.gameTimer == 0) {
this.add.text(15,85, "The Client Figured You Out! You lose Press s to switch.");
        }
    
        if(Phaser.Input.Keyboard.JustDown(keyS)){
            this.scene.start('Ectoplasm');
        }
    }
}