class Mover extends Phaser.Physics.Arcade.Sprite
{
    constructor(scene, x, y){
        super(scene, x, y, 'Pacer');
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.moveSpeed = 3;
        // images are really large, use values close to this to make fit in game window
        this.setScale(.1);
        this.body.setSize(600, 1800);
    }
    update(){
        this.x -= this.moveSpeed;
        if(this.x <= 10){
            this.moveSpeed *= -1;
            this.setFlip(false, false);
        }
        else if(this.x >= game.config.width - 30){
            this.moveSpeed *= -1;
            this.setFlip(true, false);
        }
    }
}