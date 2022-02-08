class HelpScene extends Phaser.Scene {
    constructor() {
        super("HelpScene")
    }

    create(){
        this.add.image(gWidth/2, gHeight/2, "pause-scene-bg-pause")
        this.help=this.add.image(gWidth/2, gHeight/2-1000, "help-scene-help")
        this.help1=this.add.image(gWidth*0.51, gHeight*0.50-1000, "help-scene-help1")
        this.help2=this.add.image(gWidth*0.51, gHeight*0.50-1000, "help-scene-help2").setVisible(false)
        this.help3=this.add.image(gWidth*0.51, gHeight*0.50-1000, "help-scene-help3").setVisible(false)
        this.help4=this.sound.add("help1", {loop:false})
        this.help5=this.sound.add("help2", {loop:false})
        this.help6=this.sound.add("help3", {loop:false})
        this.helpcont=1
        this.aux1=1
        this.aux2=1
        this.aux3=1
        this.help4.play()

        this.btnClose = new Button(this, gWidth*0.78, gHeight * 0.17-1000, "buttons-close", {
            onClick: ()=> {
                this.tweens.add({
                    targets: [this.help, this.btnClose, this.help1, this.help2, this.help3, this.btnLeft, this.btnRigth],
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
                if(gSound==1){
                    this.help4.stop()
                    this.help5.stop()
                    this.help6.stop()
                }
            }
        })

        this.btnLeft = new Button(this, gWidth*0.23, gHeight*0.53-1000, "buttons-left", {
            onClick: ()=> {
                this.help4.stop()
                    this.help5.stop()
                    this.help6.stop()
                this.helpcont--
                if(gSound==1){
                    if(this.helpcont==1){
                        this.help4.play()
                    }   
                    else if(this.helpcont==2){
                        this.help5.play()
                    }
                }
            }
        })
        this.btnRigth = new Button(this, gWidth*0.79, gHeight*0.53-1000, "buttons-rigth", {
            onClick: ()=> {
                this.help4.stop()
                    this.help5.stop()
                    this.help6.stop()
                this.helpcont++
                if(gSound==1){
                    if(this.helpcont==2){
                        this.help5.play()
                    }   
                    else if(this.helpcont==3){
                        this.help6.play()
                    }
                }
            }
        })

        this.tweens.add({
            targets: [this.help, this.btnClose, this.help1, this.help2, this.help3, this.btnLeft, this.btnRigth],
            y: "+= 1000",
            ease: "Back",
            duration: 600
        })
    }

    update(){
        if(this.helpcont==1){
            this.help1.setVisible(true)
            this.help2.setVisible(false)
            this.help2.setVisible(false)
            this.btnLeft.setVisible(false)
            this.btnRigth.setVisible(true)
            /*if(this.aux1==1){
                this.help4.play()
                this.aux1=0
            }*/
        }
        else if(this.helpcont==2){       
            this.help1.setVisible(false)
            this.help2.setVisible(true)
            this.help3.setVisible(false)
            this.btnLeft.setVisible(true)
            this.btnRigth.setVisible(true)
            /*if(this.aux2==1){
                this.help5.play()
                this.aux2=0
            }*/
        }
        else{
            this.help1.setVisible(false)
            this.help2.setVisible(false)
            this.help3.setVisible(true)
            this.btnLeft.setVisible(true)
            this.btnRigth.setVisible(false)
            /*if(this.aux3==1){
                this.help6.play()
                this.aux3=0
            }*/
        }
    }

    Back(){
        if(gLastScene=="PlayGame"){
            this.scene.stop()
            this.scene.resume(gLastScene)
        }
        else if(gLastScene=="PauseScene"){
            this.scene.stop()
            this.scene.launch("PauseScene")
        }
        else{
            this.scene.stop()
            this.scene.resume("SplashScene")
        }
        
    }
}