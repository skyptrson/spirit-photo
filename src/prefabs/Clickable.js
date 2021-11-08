class Clickable extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, asset){
        super(scene, x, y);
        this.setInteractive({
            // useHandCursor: true
        });
        scene.add.existing(this);
        this.on('pointerdown', function(pointer){
            if(scene.jarClicked){
            asset.visible = true;
            console.log(`${scene.allPlaced}`);
            scene.allPlaced++;
            scene.jarClicked = false;
            }
        });
    }
}