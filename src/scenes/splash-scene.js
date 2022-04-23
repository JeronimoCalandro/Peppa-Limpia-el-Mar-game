class SplashScene extends Phaser.Scene {
    constructor() {
        super("SplashScene")
    }

    create()
    {
        this.add.image(gWidth/2, gHeight/2, "splash-scene-bgsplash")
        this.splash=this.sound.add("splash", {loop:true})
        this.splashLocucion=this.sound.add("splashLocucion", {loop:false})
        if(gSound==1){
            if(gMusic==1){

                this.splash.play()
            }
            this.splashLocucion.play()          
        }
        


        gLastScene="SplashScene"
        
        this.tweens.add({
            targets: this.title=this.add.image(gWidth/2, gHeight * 0.43-1000, "splash-scene-title"),
            duration: 120,
            repeat: -1,
            repeatDelay: 500,
            ease: "Circ",
            yoyo: 1,
            scale: 1.03
        })

        this.btnPlay = new Button(this, gWidth/2, gHeight * 0.85+1000 , "buttons-play", {
            onClick: ()=> {
                if(gSound==1){
                    
                }
                this.sound.stopAll()
                this.scene.start("PlayGame")
            }
        })

        this.btnMusic = new Button(this, gWidth*0.912, gHeight * 0.07-1000, "buttons-music", {
            onClick: ()=> {
                dataLayer.push({'event':'ga_event','category':'Games','action':'DKW - Sound [Activate - Desactivate]','label':'{{Peppa Limpia el Mar}}','GameCategory':'{{game}}','Show':'{{Peppa Pig}}'})
                console.log("DKW - Sound")
                gMusic=gMusic*-1
            }
        })

        this.tweens.add({
            targets: this.title,
            y: "+= 1000",
            ease: "Back",
            delay: 300,
            duration: 600
        })

        this.tweens.add({
            targets: [this.btnPlay],
            y: "-= 1000",
            ease: "Back",
            delay: 300,
            duration: 600
        })

        this.tweens.add({
            targets: [this.btnMusic],
            y: "+= 1000",
            ease: "Back",
            delay: 500,
            duration: 600
        })

        // -- flash --
        this.tweens.add({
            targets: this.add.rectangle(0, 0, gWidth, gHeight, 0xffffff, 1).setOrigin(0, 0),
            alpha: 0,
            duration: 200,
            delay: 100
        })
    }

    update(){
        if(gMusic==1){
            this.splash.setMute(false)
        }
        else if(gMusic==-1){
            this.splash.setMute(true)
        }
    }
}