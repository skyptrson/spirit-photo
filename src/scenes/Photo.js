class Photo extends Phaser.Scene{
    constructor(){
        super("Photo");
    }

    preload(){
        this.load.image("Pacer", "./assetsPhotoGame/clientPacing.png");
        this.load.image("Cam", "./assetsPhotoGame/camera.png");
        this.load.image("square", "./assets/square.PNG");
    }

    create(){
        this.cameras.main.setBackgroundColor("#EEEEEE");
        let textConfig = {
            color: '#000000'
        };

        this.add.text(20,20, "Press s to switch.", textConfig); // debugging purposes, remove this later
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

        // 📸 area setup
        this.photoZone = this.add.zone(game.config.width*.31,0).setSize(250,275).setOrigin(0,0);
        this.physics.world.enable(this.photoZone);
        this.photoZone.body.moves = false;

       // 🚶‍♂️set up
        this.man = new Mover(this, 25, game.config.width/3);
        
        // 📷 setup
        this.cam = this.add.sprite(game.config.width/3, game.config.height *.70, 'Cam');
        this.cam.setScale(.1);

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
        })

    }
    update(){
        if(this.photoCorrect && this.clicked){
            console.log("Succesful photo!");
        }
        else if(this.clicked){
            console.log("Bad photo.");
        }

        if(Phaser.Input.Keyboard.JustDown(keyS)){
            this.scene.start('Develop');
        }
        this.man.update();
        this.photoCorrect = false;
        this.clicked = false;
    }
}