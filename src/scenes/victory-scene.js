class VictoryScene extends Phaser.Scene {
    constructor() {
        super("VictoryScene")
    }

    create(){
        this.bg=this.add.image(gWidth/2, gHeight/2, "pause-scene-bg-pause")
        this.victory=this.add.image(gWidth/2, gHeight/2-1000, "victory-scene-victory")
        this.finish=this.sound.add("finish", {loop:false})
        this.esoEs=this.sound.add("esoEs", {loop:false})
        this.peppa=this.add.image(gWidth*0.20, gHeight*0.60+1000, "victory-scene-peppa")
        if(gSound==1){
            this.finish.play()
            this.esoEs.play()
        }
        
        let bar = new BarMinigame(this, gWidth*0.64, gHeight*0.57-1000, gWidth*2, 600, 0)
        gTimesPlayed++
        dataLayer.push({'event':'ga_event','category':'Games','action':'DKW - Successful - Level {Level}','label':'{{Peppa Limpia el Mar}}','GameCategory':'{{game}}','Show':'{{Peppa Pig}}'})
        console.log("DKW - Successful Level")
        
        bar.update(gPoints/gBest)

        this.bottles=this.add.image(gWidth*0.645, gHeight*0.40-1000, "victory-scene-bottles")

        this.bottlesText=this.add.text(gWidth*0.653, gHeight*0.403-1000, gBest,{     
            fontSize:"38px",
            fill:"#fff",
            fontFamily:"Fredoka",
        });

        this.scoreText=this.add.text(gWidth*0.56, gHeight*0.50-1000, gPoints,{     
            fontSize:"50px",
            fill:"#fff",
            fontFamily:"Fredoka",
        });
        this.bestText=this.add.text(gWidth*0.56, gHeight*0.59-1000, gBest,{     
            fontSize:"50px",
            fill:"#fff",
            fontFamily:"Fredoka",
        });

        this.btnPlay = new Button(this, gWidth*0.75, gHeight * 0.80-1000, "buttons-play", {
            onClick: ()=> {
                dataLayer.push({'event':'ga_event','category':'Games','action':'DKW - Start Over','label':'{{Peppa Limpia el Mar}}','GameCategory':'{{Peppa Pi}}','Show':'{{Peppa Pig}}'})
                console.log("DKW - Start Over")
                this.sound.stopAll()
                this.tweens.add({
                    targets: [this.btnPlay,  this.victory, this.btnPlay, this.bestText, this.scoreText, bar, this.bottles, this.bottlesText, this.btnHome],
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

        this.btnHome = new Button(this, gWidth*0.70, gHeight * 0.70-1000, "buttons-home-defeat", {
            onClick: ()=> {
                dataLayer.push({'event':'ga_event','category':'Games','action':'DKW - To Return','label':'{{Peppa Limpia el Mar}}','GameCategory':'{{Peppa Pig}}','Show':'{{Peppa Pig}}'})
                console.log("DKW - To Return")
                this.scene.stop()
                this.scene.start("SplashScene")
            }
        })
        
        this.tweens.add({
            targets: [this.btnPlay, this.victory, this.btnHome, this.bestText, this.scoreText, bar, this.bottles, this.bottlesText],
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