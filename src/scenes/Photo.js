class Photo extends Phaser.Scene{
    constructor(){
        super("Photo");
    }

    preload(){
        this.load.image("Pacer", "./assetsPhotoGame/clientPacing.png");
        this.load.image("Cam", "./assetsPhotoGame/camera.png");
    }

    create(){
        this.cameras.main.setBackgroundColor("#EEEEEE");
        let textConfig = {
            color: '#000000'
        };

        this.add.text(20,20, "Photo minigame , Press s to switch.", textConfig); // debugging purposes, remove this later
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        // 📸 area setup
        this.photoZone = this.add.zone(game.config.width*.31,0).setSize(250,275).setOrigin(0,0);
        this.physics.world.enable(this.photoZone);
        this.photoZone.body.moves = false;

        this.photoCorrect = false;

        // set up button, on click, check if man overlaps photozone

        // set up moving man
        this.man = new Mover(this, 25, game.config.width/3);


        this.physics.add.overlap(this.man,this.photoZone, ()=>{
            console.log("overlapped.");
        });
    }
    update(){
        // this.photoZone.debugBodyColor = this.photoZone.body.touching.none ? 0x00ffff : 0xffff00;
        if(Phaser.Input.Keyboard.JustDown(keyS)){
            this.scene.start('Develop');
        }
        this.man.update();
    }
}