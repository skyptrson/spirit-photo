class Gauze extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture){
        super(scene, x, y, texture);
        scene.add.existing(this);
        this.setScale(.15);
        this.setOrigin(.75,.75);
        this.visible = false;
    }
    update(){
        
    }

}