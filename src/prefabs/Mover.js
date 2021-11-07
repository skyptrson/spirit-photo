class Mover extends Phaser.Physics.Arcade.Sprite
{
    constructor(scene, x, y){
        super(scene, x, y, 'Pacer');
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.moveSpeed = 3;
        this.direction = true;
    }
    update(){
        this.x -= this.moveSpeed;
        if(this.x <= 10){
            this.moveSpeed *= -1;
        }
        else if(this.x >= game.config.width - 30){
            this.moveSpeed *= -1;
        }
    }
}