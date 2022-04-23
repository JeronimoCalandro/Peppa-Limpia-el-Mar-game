class BootScene extends Phaser.Scene {
    constructor() {
        super("BootScene")
    }
    preload() {
        this.load.image("preload-scene-bg", "assets/preload-scene/bg.png")
        this.load.image("preload-scene-title", "assets/splash-scene/title.png")
        this.load.image("ui-fillbar-top", "assets/preload-scene/fillbar-top.png")
        this.load.image("ui-fillbar-bottom", "assets/preload-scene/fillbar-bottom.png")
    }
    create() {
        this.scene.start("PreloadScene")
        dataLayer.push({'event':'ga_event','category':'Games','action':'DKW - Start Game','label':'{{Peppa Limpia el Mar}}','GameCategory':'{{game}}','Show':'{{Peppa Pig}}','Vertical Traffic':'{{vertical traffic}}'})
        console.log("Start Game")
    }
}


class PreloadScene extends Phaser.Scene {
    constructor() {
        super('PreloadScene')
    }

    preload() {
        let bg = this.add.image(gWidth/2, gHeight, "preload-scene-bg")
        let title = this.add.image(gWidth/2, gHeight *0.50, "preload-scene-title").setScale(0.80,0.80)
        this.tweens.add({
            targets: title,
            duration: 120,
            repeat: -1,
            repeatDelay: 2000,
            ease: "Circ",
            yoyo: 1,
            scale: 1
        })
         
        bg.setOrigin(0.5, 1)
        ScaleImageToWidth(bg, gWidth)

        // --- load bar ---
        let bar = new FillBar(this, gWidth/2, gHeight*0.75, gWidth*2, 600, 0)

        this.load.on("progress", (p) => {
            bar.update(p, 1)
        })
        this.load.on("complete", ()=> {
            this.time.delayedCall(200, ()=> {
                this.scene.start("SplashScene")
            })
        })


        // === SPRITE SHEETS ===

        /*this.load.spritesheet("gems", gameConfig.assetsPath + "game/gems.png", {
            frameWidth: 124.6,
            frameHeight: 125
        })*/


        // === SOUNDS ===

        this.load.audio("correct", gameConfig.assetsPath + "sounds/correct.mp3")
        this.load.audio("incorrect", gameConfig.assetsPath + "sounds/incorrect.mp3")
        this.load.audio("finish", gameConfig.assetsPath + "sounds/finish.mp3")
        this.load.audio("splash", gameConfig.assetsPath + "sounds/splash.mp3")
        this.load.audio("splashLocucion", gameConfig.assetsPath + "sounds/splashLocucion.mp3")
        this.load.audio("help1", gameConfig.assetsPath + "sounds/help1.mp3")
        this.load.audio("help2", gameConfig.assetsPath + "sounds/help2.mp3")
        this.load.audio("help3", gameConfig.assetsPath + "sounds/help3.mp3")
        this.load.audio("esoEs", gameConfig.assetsPath + "sounds/esoEs.mp3")
        this.load.audio("vuelveAIntentarlo", gameConfig.assetsPath + "sounds/vuelveAIntentarlo.mp3")

        // === UI ===
        this.loadElements([
            
        ], "ui", "image")

         // === BUTTONS ===
        this.loadElements([
            "play",
            "pause",
            "sound",
            "music",
            "home",
            "help",
            "close",
            "back",
            "sound-pause",
            "music-pause",
            "play-pause",
            "home-defeat",
            "left",
            "rigth",
            "restart-defeat",
        ], "buttons", "image")

        // === GAME SCENE ===
        this.loadElements([
            "bggame",
            "sand",
            "cloud",
            "sea1",
            "sea2",
            "sea3",
            "sea4",
            "sea5",
            "sea6",
            "sea7",
            "obj1",
            "obj2",
            "obj3",
            "obj4",
            "obj5",
            "obj6",
            "obj7",
            "obj8",
            "obj9",
            "obj10",
            "mango",
            "caña",
            "ansuelo",
            "HUD",
            "ansueloHUD",
            "score",
            "cañaPuntos",
            "puntoFinal",
            "ligth",
            "negro",
        ], "game", "image")

        // === SPLASH SCENE ===
        this.loadElements([
            "bgsplash",
            "title",
        ], "splash-scene", "image")
            
        // === PAUSE SCENE ===
        this.loadElements([
            "pause",
            "bg-pause",
            "peppa"
        ], "pause-scene", "image")

        // === HELP SCENE ===
        this.loadElements([
            "help",
            "help1",
            "help2",
            "help3",
            
        ], "help-scene", "image")

        // === VICTORY SCENE ===
        this.loadElements([
            "victory",
            "peppa",
            "bar-top",
            "bar-bottom",
            "bottles",

        ], "victory-scene", "image")

        // === DEFEAT SCENE ===
        this.loadElements([
            "defeat",
            "peppa",
        ], "defeat-scene", "image")



        // === FINISH SCENE ===
         this.loadElements([
            
        ], "finish-scene", "image")
    }

    loadElements(array, folder, type) {
        for (let elem of array) {
            switch(type) {
                case "image": {
                    this.load.image(folder + "-" + elem, gameConfig.assetsPath + folder + "/" + elem + ".png")
                    break
                }
            }
        }
    }
}


