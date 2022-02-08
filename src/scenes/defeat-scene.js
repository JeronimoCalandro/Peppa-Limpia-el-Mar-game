class DefeatScene extends Phaser.Scene {
    constructor() {
        super("DefeatScene")
    }

    create(){
        this.bg=this.add.image(gWidth/2, gHeight/2, "pause-scene-bg-pause")
        this.defeat=this.add.image(gWidth/2, gHeight/2-1000, "defeat-scene-defeat")

        this.bestShadowText=this.add.text(gWidth*0.672, gHeight*0.545-1000, gBest,{     
            fontSize:"100px",
            fill:"#9C5A1E",
            fontFamily:"fredoka one",
        });
        this.bestText=this.add.text(gWidth*0.67, gHeight*0.54-1000, gBest,{     
            fontSize:"100px",
            fill:"#F5FF00",
            fontFamily:"fredoka one",
        });

        this.btnPlay = new Button(this, gWidth*0.60, gHeight * 0.80-1000, "buttons-play", {
            onClick: ()=> {
                this.tweens.add({
                    targets: [this.btnPlay, this.defeat, this.bestText, this.bestShadowText],
                    y: "-= 1000",
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
            }
        })
        
        this.tweens.add({
            targets: [this.btnPlay, this.defeat, this.bestText, this.bestShadowText],
            y: "+= 1000",
            ease: "Back",
            duration: 600
        })
    }

    Back(){
        this.scene.stop()
        this.scene.start("PlayGame")
    }

    update(){
        
        
    }

}