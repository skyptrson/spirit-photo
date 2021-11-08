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
        this.load.image("UniGhostLife", "./UniversialAssets/ghostLife.png");
        this.load.image("UniTimerBar", "./UniversialAssets/timerBar.png");
        this.load.image("UniTimerEmpty", "./UniversialAssets/timerEmpty.png");
    }

    create(){
        // this.input.setDefaultCursor('url(./assetsEctoplasmFIXED/playerHandtemp.png), pointer');
        // assistant face set up
        this.face = this.add.sprite(game.config.width/2, game.config.height/2, 'Assistant').setScale(.2);
        
        // 🔡 config
        this.textConfig = {
            color: '#000000',
            backgroundColor: '#FFFFFF'
        };
        this.add.text(20,game.config.height-100, "Click on the jar to grab,\nthen click in the mouth\nto place the roll\n'S' to switch game.", this.textConfig);
        
        // 🥛 jar(s) set up
        this.jar = this.physics.add.sprite(game.config.width*.85, game.config.height*.75, 'Fifth Jar').setScale(.1);
        this.jar.body.setSize(700,1400);
        this.jar.setInteractive();
        this.jarClicked = false;
        this.input.on('gameobjectdown', (pointer, gameObject, event) =>{
            this.jarClicked = true;
        });
        

        // gauze set up
        this.gauze1 = new Gauze(this, 420, 365, 'First Gauze');
        this.gauze2 = new Gauze(this, 430, 360, 'Second Gauze');
        this.gauze3 = new Gauze(this, 440, 355, 'Third Gauze');
        this.gauze4 = new Gauze(this, 450, 357, 'Fourth Gauze');
        this.gauze5 = new Gauze(this, 460, 362, 'Fifth Gauze');

        this.g1Button = new Clickable(this, game.config.width*.39, game.config.height*.70, this.gauze1);
        this.g2Button = new Clickable(this,game.config.width*.45, game.config.height*.68, this.gauze2);
        this.g3Button = new Clickable(this,game.config.width*.51, game.config.height*.66, this.gauze3);
        this.g4Button = new Clickable(this,game.config.width*.57, game.config.height*.68, this.gauze4);
        this.g5Button = new Clickable(this,game.config.width*.62, game.config.height*.72, this.gauze5);

        this.allPlaced = 0;
 

        // ⌨ set up
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

        // testing code, comment out later
        this.input.on('gameobjectdown', (pointer, gameObject, event) =>{
            console.log(`${pointer.x}`, `${pointer.y}`);
        });

        // ⌚
        this.clock = this.time.delayedCall(10000, () =>{
            this.add.text(game.config.width/2,game.config.height/2, "Too slow!", this.textConfig).setOrigin(0.5, 0.5);
            console.log("Game over.");
            this.time.delayedCall(2000, ()=>{
            this.scene.start('Photo');
            });
        });
    }
    update(){
        if(Phaser.Input.Keyboard.JustDown(keyS)){
            this.scene.start('Photo');
        }
        if(this.allPlaced == 5){
            this.add.text(game.config.width/2,game.config.height/2, "Success!", this.textConfig).setOrigin(0.5, 0.5);
            this.clock.remove();
            this.time.delayedCall(2000, ()=>{
                this.scene.start('Develop');
            })
        }
    }
}