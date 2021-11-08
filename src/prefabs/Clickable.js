class Clickable extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture){
        super(scene, x, y, texture);
        this.setInteractive({
            useHandCursor: true
        });
        scene.add.existing(this);
        this.on('pointerdown', function(pointer){
            console.log("object clicked");
        });
    }
    update(){
        
    }

}