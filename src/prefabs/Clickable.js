class Clickable extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture){
        super(scene, x, y, texture);
        // this.visible = false;
        this.setScale(.15);
        this.setOrigin(.75,.75);
        this.setInteractive();
        scene.add.existing(this);
        this.on('pointerdown', function(pointer){
            console.log("object clicked");
            // this.visible = true;
        });
    }
    update(){
        
    }

}