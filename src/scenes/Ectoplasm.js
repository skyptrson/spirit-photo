class Ectoplasm extends Phaser.Scene{
    constructor(){
        super("Ectoplasm");
    }

    preload(){
        this.load.image("Assistant", "./assetsEctoplasm/assistantMouthEmpty.png");
        this.load.image("Blank Jar", "./assetsEctoplasmFIXED/jar0.png");
        this.load.image("First Gauze", "./assetsEctoplasmFIXED/gauze1.png");
        this.load.image("Second Gauze", "./assetsEctoplasmFIXED/gauze2.png");
        this.load.image("Third Gauze", "./assetsEctoplasmFIXED/gauze3.png");
        this.load.image("Fourth Gauze", "./assetsEctoplasmFIXED/gauze4.png");
        this.load.image("Fifth Gauze", "./assetsEctoplasmFIXED/gauze5.png");
        this.load.image("First Jar", "./assetsEctoplasmFIXED/jar1.png");
        this.load.image("Second Jar", "./assetsEctoplasmFIXED/jar2.png");
        this.load.image("Third Jar", "./assetsEctoplasmFIXED/jar3.png");
        this.load.image("Fourth Jar", "./assetsEctoplasmFIXED/jar4.png");
        this.load.image("Fifth Jar", "./assetsEctoplasmFIXED/jar5.png");
        this.load.image("Hand", "./assetsEctoplasmFIXED/playerHand.png");
        this.load.image("UniGhostLife", "./UniversialAssets/ghostLife.png")
        this.load.image("UniTimerBar", "./UniversialAssets/timerBar.png")
        this.load.image("UniTimerEmpty", "./UniversialAssets/timerEmpty.png")
    }

    create(){
        // assistant face set up
        this.face = this.add.sprite(game.config.width/2, game.config.height/2, 'Assistant').setScale(.2);
        
        // 🔡 config
        this.textConfig = {
            color: '#000000',
            backgroundColor: '#FFFFFF'
        };
        this.add.text(20,20, "Ectoplasm minigame, Press s to switch.", this.textConfig);
        
        // 🥛 jar(s) set up
        this.jar = this.physics.add.sprite(game.config.width*.85, game.config.height*.75, 'Fifth Jar').setScale(.1);
        

        // gauze set up
        this.gauze1 = new Clickable(this, 244, 336, 'First Gauze');
        this.gauze2 = new Clickable(this, 550, 300, 'Second Gauze');
        this.gauze3 = new Clickable(this, 550, 300, 'Third Gauze');
        this.gauze4 = new Clickable(this, 550, 300, 'Fourth Gauze');
        this.gauze5 = new Clickable(this, 550, 300, 'Fifth Gauze');


        // ⌨ set up
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

        // dont remember why this code is here, remove later
        this.input.on('gameobjectdown', (pointer, gameObject, event) =>{
            console.log(`${pointer.x}`, `${pointer.y}`);
        });

        // ⌚
        // this.clock = this.time.delayedCall(10000, () =>{
        //     //
        //     console.log("Game over.");
        //     // this.scene.start('Photo');
        // })
    }
    update(){
        if(Phaser.Input.Keyboard.JustDown(keyS)){
            this.scene.start('Photo');
        }

        this.gauze1.update();
    }
}