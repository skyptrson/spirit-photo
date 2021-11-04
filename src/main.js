
let config = {
    type: Phaser.WEBGL,
    width: 640,
    height: 480,
    scene: [Ectoplasm, Photo, Develop]
}
let game = new Phaser.Game(config);