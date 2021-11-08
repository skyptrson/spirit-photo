class Photo extends Phaser.Scene{
    constructor(){
        super("Photo");
    }

    preload(){
        this.load.image("Pacer", "./assetsPhotoGame/clientPacing.png");
        this.load.image("Cam", "./assetsPhotoGame/camera.png");
        this.load.image("square", "./assets/square.PNG");
        this.load.image("UniGhostLife", "./UniversialAssets/ghostLife.png");
        this.load.image("UniTimerBar", "./UniversialAssets/timerBar.png");
        this.load.image("UniTimerEmpty", "./UniversialAssets/timerEmpty.png");
    }

    create(){
        this.lives = 3;
        this.cameras.main.setBackgroundColor("#EEEEEE");
        this.textConfig = {
            color: '#000000',
            backgroundColor: '#FFFFFF'
        };

        this.add.text(20,20, "Press s to switch.", this.textConfig); // debugging purposes, remove this later

        // ⌨ setup
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

        // 📸 area setup
        this.photoZone = this.add.zone(game.config.width*.31,0).setSize(250,275).setOrigin(0,0);
        this.physics.world.enable(this.photoZone);
        this.photoZone.body.moves = false;

       // 🚶‍♂️set up
        this.man = new Mover(this, 25, game.config.width/3);
        
        // 📷 setup
        this.cam = this.add.sprite(game.config.width/3, game.config.height *.70, 'Cam').setScale(.1);

        // 📸 👆 button set up
        this.camButton = this.physics.add.sprite(game.config.width*.48, 350);
        this.camButton.fade = 1;
        this.camButton.setInteractive({
            useHandCursor: true
        });
        this.photoCorrect = false;
        this.clicked = false;

        
        // check if man is in photo
        this.physics.add.overlap(this.man,this.photoZone, ()=>{
            this.photoCorrect = true;
        });
        // check if photo was taken
        this.input.on('gameobjectdown', (pointer, gameObject, event) =>{
            this.clicked = true;
        });


    }
    update(){
        // photo taking check
        if(this.photoCorrect && this.clicked){
            this.add.text(game.config.width/2,game.config.height/2, "Succesful photo!", this.textConfig).setOrigin(0.5, 0.5);
            this.time.delayedCall(2000, ()=>{
                this.scene.start('Develop');
            })
        }
        else if(this.clicked){
            this.incorrect = this.add.text(game.config.width/2,game.config.height/2, "Bad photo.", this.textConfig).setOrigin(0.5, 0.5);
            this.lives -=1;
            this.time.delayedCall(2000, ()=>{
                this.incorrect.destroy();
            });
        }

        // change scene
        if(Phaser.Input.Keyboard.JustDown(keyS)){
            this.scene.start('Develop');
        }
        if(this.lives == 0){
            this.add.text(game.config.width/2,game.config.height/2, "Game over!.", this.textConfig).setOrigin(0.5, 0.5);
            this.time.delayedCall(4000, ()=>{
                this.scene.start('Develop');
            })
        }
        // updates to keep scene running
        this.man.update();
        this.photoCorrect = false;
        this.clicked = false;
    }
}