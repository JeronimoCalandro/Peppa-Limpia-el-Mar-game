class PauseScene extends Phaser.Scene {
    constructor() {
        super("PauseScene")
    }

    create(){
        this.add.image(gWidth/2, gHeight/2, "pause-scene-bg-pause")
        this.pause=this.add.image(gWidth/2, gHeight/2-1000, "pause-scene-pause")
        this.peppa=this.add.image(gWidth*0.73, gHeight*0.55+1000, "pause-scene-peppa")
        gLastScene="PauseScene"

        this.btnClose = new Button(this, gWidth*0.35, gHeight * 0.60-1000, "buttons-back", {
            onClick: ()=> {
                if(gSound==1){
                    
                }
                this.sound.stopAll()
                this.scene.stop()
                this.scene.start("PlayGame")
            }
        })

        this.btnMusic = new Button(this, gWidth*0.45, gHeight * 0.40-1000, "buttons-music-pause", {
            onClick: ()=> {
                gMusic=gMusic*-1
            }
        })
        
        this.btnSound = new Button(this, gWidth*0.55, gHeight * 0.40-1000, "buttons-sound-pause", {
            onClick: ()=> {
                gSound=gSound*-1
                if(gSound==1){
                  
                }
            }
        })

        this.btnHelp = new Button(this, gWidth*0.55, gHeight * 0.60-1000, "buttons-help", {
            onClick: ()=> {
                this.tweens.add({
                    targets: [this.btnClose, this.btnHelp, this.btnHome, this.btnMusic, this.btnSound, this.pause, this.btnRestart],
                    y: "-= 1000",
                    ease: "Back",
                    duration: 600
                })
                this.tweens.add({
                    targets: this.peppa,
                    y: "+= 1000",
                    ease: "Back",
                    duration: 600
                })
                this.timer1 = this.time.addEvent({
                    delay: 300,
                    loop: false,
                    callback: () => {
                        this.BackHelp();
                    }
                })
                if(gSound==1){
                    
                }
            }
        })

        this.btnHome = new Button(this, gWidth*0.35, gHeight *0.40-1000, "buttons-home", {
            onClick: ()=> {
                this.sound.stopAll()
                if(gSound==1){
                   
                }
                this.scene.stop()
                this.scene.start("SplashScene")
            }
        })

        this.btnRestart = new Button(this, gWidth*0.45, gHeight * 0.60-1000, "buttons-play-pause", {
            onClick: ()=> {
                this.tweens.add({
                    targets: [this.btnClose, this.btnHelp, this.btnHome, this.btnMusic, this.btnSound, this.pause, this.btnRestart],
                    y: "-= 1000",
                    ease: "Back",
                    duration: 600
                })
                this.tweens.add({
                    targets: this.peppa,
                    y: "+= 1000",
                    ease: "Back",
                    duration: 600
                })
                this.timer1 = this.time.addEvent({
                    delay: 300,
                    loop: false,
                    callback: () => {
                        this.Back();
                    }
                })
                if(gSound==1){
                
                }
                
            }
        })

        this.tweens.add({
            targets: [this.btnClose, this.btnHelp, this.btnHome, this.btnMusic, this.btnSound,  this.btnRestart, this.pause],
            y: "+= 1000",
            ease: "Back",
            duration: 600
        })
        this.tweens.add({
            targets: this.peppa,
            y: "-= 1000",
            ease: "Back",
            duration: 600
        })
    }

    Back(){
        this.scene.stop()
        this.scene.resume("PlayGame")
    }

    BackHelp(){
        this.scene.stop()
        this.scene.launch("HelpScene")
    }

    update(){
        if(gMusic==1){
            game.sound.mute=false
        }
        else{
            game.sound.mute=true
        }

    }
}