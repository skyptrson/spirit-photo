
let config = {
    type: Phaser.WEBGL,
    width: 640,
    height: 480,
    scene: [Ectoplasm, Photo, Develop],
    // zoom: 1.5,
    debug: true,
    physics:{
        default: 'arcade',
        arcade:{
            debug: true // turn this off before game is submitted
        }
    }
}
let game = new Phaser.Game(config);
let keyS;