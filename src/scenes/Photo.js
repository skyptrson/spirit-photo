class Photo extends Phaser.Scene{
    constructor(){
        super("Photo");
    }

    preload(){

    }

    create(){
        this.add.text(20,20, "Photo scene."); // debugging purposes, remove this later
        // 📸 area setup
        this.photoZone = this.add.zone(game.config.width*.31,0).setSize(250,275).setOrigin(0,0);
        this.physics.world.enable(this.photoZone);
        this.photoZone.body.moves = false;

        this.photoCorrect = false;

        // set up button, on click, check if man overlaps photozone

        // set up moving man
        this.man = new Mover(this, game.config.width/2, game.config.width/3);


        // this.physics.add.overlap(this.man,this.photoZone);
    }
    update(){
        this.photoZone.debugBodyColor = this.photoZone.body.touching.none ? 0x00ffff : 0xffff00;
        this.man.update();
    }
}