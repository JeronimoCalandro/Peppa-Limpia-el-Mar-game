class DefeatScene extends Phaser.Scene {
    constructor() {
        super("DefeatScene")
    }

    create(){
        this.bg=this.add.image(gWidth/2, gHeight/2, "pause-scene-bg-pause")
        this.victory=this.add.image(gWidth/2, gHeight/2-1000, "defeat-scene-defeat")
        this.peppa=this.add.image(gWidth*0.20, gHeight*0.60+1000, "defeat-scene-peppa")
        gTimesPlayed++
        this.vuelveAIntentarlo=this.sound.add("vuelveAIntentarlo", {loop:false})
        dataLayer.push({'event':'ga_event','category':'Games','action':'DKW - Successful - Level {Level}','label':'{{Peppa Limpia el Mar}}','GameCategory':'{{game}}','Show':'{{Peppa Pig}}'})
        console.log("DKW - Defeat Level")

        if(gSound==1){
            this.vuelveAIntentarlo.play()
        }

        this.btnPlay = new Button(this, gWidth*0.73, gHeight * 0.80-1000, "buttons-restart-defeat", {
            onClick: ()=> {
                dataLayer.push({'event':'ga_event','category':'Games','action':'DKW - Start Over','label':'{{Peppa Limpia el Mar}}','GameCategory':'{{Peppa Pi}}','Show':'{{Peppa Pig}}'})
                console.log("DKW - Start Over")
                this.sound.stopAll()
                this.tweens.add({
                    targets: [this.btnPlay,  this.victory, this.btnPlay,  this.btnHome],
                    y: "-= 1000",
                    ease: "Back",
                    delay:300,
                    duration: 600
                })
                this.tweens.add({
                    targets: this.peppa,
                    y: "+= 1000",
                    ease: "Back",
                    dealy:500,
                    duration: 600
                })
                this.timer1 = this.time.addEvent({
                    delay: 300,
                    loop: false,
                    callback: () => {
                        this.Back();
                    }
                })
            }
        })

        this.btnHome = new Button(this, gWidth*0.67, gHeight * 0.70-1000, "buttons-home-defeat", {
            onClick: ()=> {
                dataLayer.push({'event':'ga_event','category':'Games','action':'DKW - To Return','label':'{{Peppa Limpia el Mar}}','GameCategory':'{{Peppa Pig}}','Show':'{{Peppa Pig}}'})
                console.log("DKW - To Return")
                this.scene.stop()
                this.scene.start("SplashScene")
            }
        })
        
        this.tweens.add({
            targets: [this.btnPlay, this.victory, this.btnHome],
            y: "+= 1000",
            ease: "Back",
            delay:300,
            duration: 600
        })
        this.tweens.add({
            targets: this.peppa,
            y: "-= 1000",
            ease: "Back",
            dealy:500,
            duration: 600
        })
    }

    Back(){
        this.scene.stop()
        this.scene.start("PlayGame")
    }
}