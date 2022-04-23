class playGame extends Phaser.Scene{
    constructor(){
        super("PlayGame");
    }

    create(){
        this.objects=["game-obj1","game-obj2","game-obj3","game-obj4","game-obj5","game-obj6","game-obj7","game-obj8","game-obj9","game-obj10"]
        this.lifes=3
        this.points=0
        this.pointsRigth=0
        this.pointsLeft=0
        this.isTouching=false
        this.isMobile=true
        this.isClicking=false
        this.isAux=false
        gLastScene="PlayGame"
        this.cursor = this.input.keyboard.createCursorKeys();
        this.space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        this.correct=this.sound.add("correct", {loop:false})
        this.incorrect=this.sound.add("incorrect", {loop:false})
        this.splash=this.sound.add("splash", {loop:true})
        this.splash.play()
        this.splash.volume =-0.7

        this.background=this.add.image(gWidth/2, gHeight*0.44, "game-bggame")
        this.cloud1=this.physics.add.image(gWidth*0.05, gHeight*0.03, "game-cloud").setVelocityX(50)
        this.cloud2=this.physics.add.image(gWidth*0.50, gHeight*0.10, "game-cloud").setScale(0.90, 0.90).setVelocityX(25)
        this.cloud3=this.physics.add.image(gWidth*0.90, gHeight*0.20, "game-cloud").setScale(0.60, 0.60).setVelocityX(45)

        this.sea1=this.physics.add.image(gWidth/2, gHeight*0.32, "game-sea1")
        this.layerBottle1 = this.add.layer()
        this.layer1 = this.add.layer()
        this.obj1Group=this.physics.add.group()

        this.sea2=this.physics.add.image(gWidth/2, gHeight*0.45, "game-sea2")
        this.layerBottle2 = this.add.layer()
        this.layer2 = this.add.layer()
        this.obj2Group=this.physics.add.group()

        this.sea3=this.physics.add.image(gWidth/2, gHeight*0.48, "game-sea3")
        this.layerBottle3 = this.add.layer()
        this.layer3 = this.add.layer()
        this.obj3Group=this.physics.add.group()

        this.sea4=this.physics.add.image(gWidth/2, gHeight*0.58, "game-sea4")
        this.layerBottle4 = this.add.layer()
        this.layer4 = this.add.layer()
        this.obj4Group=this.physics.add.group()

        this.sea5=this.physics.add.image(gWidth/2, gHeight*0.65, "game-sea5")
        this.layerBottle5 = this.add.layer()
        this.layer5 = this.add.layer()
        this.obj5Group=this.physics.add.group()

        this.sea6=this.physics.add.image(gWidth/2, gHeight*0.90, "game-sea6")
        this.layerBottle6 = this.add.layer()
        this.layer6 = this.add.layer()
        this.obj6Group=this.physics.add.group()

        this.sea7=this.physics.add.image(gWidth/2, gHeight*1.03, "game-sea7")
        this.layerBottle7 = this.add.layer()
        this.layer7 = this.add.layer()
        this.obj7Group=this.physics.add.group()

        this.bottleGroupLeft=this.physics.add.group()
        this.bottleGroupRigth=this.physics.add.group()
        this.sand=this.add.image(gWidth/2, gHeight*0.94, "game-sand")

        this.objSi1=this.physics.add.group()
        this.objSi2=this.physics.add.group()
        this.objSi3=this.physics.add.group()
        this.objSi4=this.physics.add.group()
        this.objSi5=this.physics.add.group()
        this.objSi6=this.physics.add.group()
        
        //this.cana=this.physics.add.image(gWidth*0.423, gHeight*0.50, "game-caña")
        //this.ansuelo=this.physics.add.image(gWidth*0.321, gHeight*0.399, "game-ansuelo").setSize(20,20)
        this.destroy1=this.physics.add.image(gWidth*-0.15, gHeight/2, "game-negro")
        this.destroy2=this.physics.add.image(gWidth*1.15, gHeight/2, "game-negro")
    

        this.cana=this.physics.add.image(gWidth*0.432, gHeight*0.50, "game-cañaPuntos")
        this.ansuelo=this.physics.add.image(gWidth*0.325, gHeight*0.436, "game-puntoFinal").setInteractive()
        this.mango=this.physics.add.image(gWidth/2, gHeight*0.90, "game-mango")

        this.cana.setVisible(false)
        this.ansuelo.setVisible(false)


        // ====================================================  HUD  ==================================================================
        
        this.hud=this.add.image(gWidth*0.15, gHeight*0.80+1000, "game-HUD")
        this.ansuelo1=this.add.image(gWidth*0.18, gHeight*0.86+1000, "game-ansueloHUD")
        this.ansuelo2=this.add.image(gWidth*0.225, gHeight*0.86+1000, "game-ansueloHUD")
        this.ansuelo3=this.add.image(gWidth*0.27, gHeight*0.86+1000, "game-ansueloHUD")
        this.score=this.add.image(gWidth*0.13, gHeight*0.10-1000, "game-score")

        this.rigthText=this.add.text(gWidth*0.137, gHeight*0.073-1000, this.pointsRigth,{     
            fontSize:"90px",
            fill:"#fff",
            fontFamily:"Fredoka",
        });
        this.leftText=this.add.text(gWidth*0.10, gHeight*0.073-1000, this.pointsLeft,{     
            fontSize:"90px",
            fill:"#fff",
            fontFamily:"Fredoka",
        });

        this.tweens.add({
            targets: [this.hud],
            y: "-= 1000",
            ease: "Back",
            delay: 100,
            duration: 600
        })
        this.tweens.add({
            targets: [this.ansuelo1],
            y: "-= 1000",
            ease: "Power3",
            delay: 300,
            duration: 600
        })
        this.tweens.add({
            targets: [this.ansuelo2],
            y: "-= 1000",
            ease: "Power3",
            delay: 400,
            duration: 600
        })
        this.tweens.add({
            targets: [this.ansuelo3],
            y: "-= 1000",
            ease: "Power3",
            delay: 500,
            duration: 600
        })

        this.btnMusic = new Button(this, gWidth*0.912, gHeight * 0.07-1000, "buttons-music", {
            onClick: ()=> {
                dataLayer.push({'event':'ga_event','category':'Games','action':'DKW - Sound [Activate - Desactivate]','label':'{{A Contar con Bean y Cosa}}','GameCategory':'{{game}}','Show':'{{Ba Da Bean}}'})
                console.log("DKW - Sound")
                gMusic=gMusic*-1

                if(gSound==1){
                    if(gMusic==1){
                        this.splash.setMute(false)
                    }
                    else if(gMusic==-1){
                        this.splash.setMute(true)
                    }
                    game.sound.mute=false
                }
                else if(gSound==-1){
                    game.sound.mute=true
                }
            }
        })
        
        this.btnPause = new Button(this, gWidth*0.956, gHeight * 0.07-1000, "buttons-pause", {
            onClick: ()=> {
                if(gSound==1){
                    
                }
                this.scene.pause()
                this.scene.launch("PauseScene")
            }
        })

        this.tweens.add({
            targets: [this.btnMusic],
            y: "+= 1000",
            ease: "Back",
            delay: 500,
            duration: 600
        })
        this.tweens.add({
            targets: [this.btnPause],
            y: "+= 1000",
            ease: "Back",
            delay: 600,
            duration: 600
        })
        this.tweens.add({
            targets: [this.score, this.leftText, this.rigthText],
            y: "+= 1000",
            ease: "Back",
            delay: 200,
            duration: 600
        })


        
        
        // ===============================================   MOVIMIENTO OLAS   =======================================================
        /*this.tweens.add({
            targets: this.sea1,
            y: "-= 50",
            ease: "Sinusoidal",
            duration: 3000,
            repeat: -1,
            yoyo: true
        })
        this.tweens.add({
            targets: this.sea2,
            y: "-= 50",
            ease: "Sinusoidal",
            duration: 1500,
            repeat: -1,
            yoyo: true
        })
        this.tweens.add({
            targets: this.sea3,
            y: "-= 50",
            ease: "Sinusoidal",
            duration: 2000,
            repeat: -1,
            yoyo: true
        })
        this.tweens.add({
            targets: this.sea4,
            y: "-= 50",
            ease: "Sinusoidal",
            duration: 2200,
            repeat: -1,
            yoyo: true
        })
        this.tweens.add({
            targets: [this.sea5],
            y: "-= 50",
            ease: "Sinusoidal",
            duration: 1800,
            repeat: -1,
            yoyo: true
        })
        this.tweens.add({
            targets: [this.sea6, this.obj7Group],
            y: "-= 50",
            ease: "Sinusoidal",
            duration: 2500,
            repeat: -1,
            yoyo: true
        })
        this.tweens.add({
            targets: [this.sea7, this.spawner7],
            y: "-= 50",
            ease: "Sinusoidal",
            duration: 2000,
            repeat: -1,
            yoyo: true
        })*/

        this.tweens.add({
            targets: [this.sea1, this.sea3, this.sea5, this.sea7],
            y: "-= 50",
            ease: "Sinusoidal",
            duration: 2200,
            repeat: -1,
            yoyo: true
        })
        this.tweens.add({
            targets: [this.sea2, this.sea4, this.sea6],
            y: "-= 50",
            ease: "Sinusoidal",
            duration: 2500,
            repeat: -1,
            yoyo: true
        })

        // ===================================================== TEMPORIZADORES ===============================================================

        this.timer1=this.time.addEvent({
            delay: 12000,
            loop: true,
            callback: () => {
                this.Spawner1()
            }
        })
        this.timer2=this.time.addEvent({
            delay: 9000,
            loop: true,
            callback: () => {
                this.Spawner2()
            }
        })
        this.timer3=this.time.addEvent({
            delay: 8000,
            loop: true,
            callback: () => {
                this.Spawner3()
            }
        })
        this.timer4=this.time.addEvent({
            delay: 8800,
            loop: true,
            callback: () => {
                this.Spawner4()
            }
        })
        this.timer5=this.time.addEvent({
            delay: 7200,
            loop: true,
            callback: () => {
                this.Spawner5()
            }
        })
        this.timer6=this.time.addEvent({
            delay: 10000,
            loop: true,
            callback: () => {
                this.Spawner6()
            }
        })

        this.timerBottles=this.time.addEvent({
            delay: 3500,
            loop: true,
            callback: () => {
                this.SpawnerBottles()
            }
        })

        // ================================================   COLISIONES   ============================================================
        let thisScene=this

        this.physics.add.overlap(this.ansuelo, this.bottleGroupLeft, leftCollider)
        function leftCollider(ansuelo, obj){
            if(thisScene.isTouching==false){
                if(thisScene.space.isDown){
                    thisScene.bottleGroupLeft.killAndHide(obj)
                    obj.body.enable=false
                    thisScene.points++
                    thisScene.isTouching=true
                    thisScene.pointsRigth++
                    if(gSound==1){
                        thisScene.correct.play()
                    }
                    thisScene.cana.setTexture("game-caña")
                    thisScene.ansuelo.setTexture("game-ansuelo")
                    thisScene.ansuelo.y-=30
                    thisScene.timer1=thisScene.time.addEvent({
                        delay: 300,
                        loop: false,
                        callback: () => {
                            thisScene.ReturnSprite()
                        }
                    })
                }
            }
        }
        this.physics.add.overlap(this.ansuelo, this.bottleGroupRigth, rigthCollider)
        function rigthCollider(ansuelo, obj){
            if(thisScene.isTouching==false){
                if(thisScene.space.isDown){
                    thisScene.bottleGroupRigth.killAndHide(obj)
                    obj.body.enable=false
                    thisScene.points++
                    thisScene.isTouching=true
                    thisScene.pointsRigth++
                    if(gSound==1){
                        thisScene.correct.play()
                    }
                    thisScene.cana.setTexture("game-caña")
                    thisScene.ansuelo.setTexture("game-ansuelo")
                    thisScene.ansuelo.y-=30
                    thisScene.timer1=thisScene.time.addEvent({
                        delay: 300,
                        loop: false,
                        callback: () => {
                            thisScene.ReturnSprite()
                        }
                    })
                }
            }
        }
        // ===============================================================================================================

        
        this.graphics = this.add.graphics()
        this.graphics2 = this.add.graphics()

        this.path = { t: 0, vec: new Phaser.Math.Vector2() }
        this.path2 = { t: 0, vec: new Phaser.Math.Vector2() }
        this.path3 = { t: 0, vec: new Phaser.Math.Vector2() }
        this.path4 = { t: 0, vec: new Phaser.Math.Vector2() }
        this.path5 = { t: 0, vec: new Phaser.Math.Vector2() }
        this.path6 = { t: 0, vec: new Phaser.Math.Vector2() }
        this.path7 = { t: 0, vec: new Phaser.Math.Vector2() }
        this.path8 = { t: 0, vec: new Phaser.Math.Vector2() }
        this.path9 = { t: 0, vec: new Phaser.Math.Vector2() }
        this.path10 = { t: 0, vec: new Phaser.Math.Vector2() }
        this.path11 = { t: 0, vec: new Phaser.Math.Vector2() }
        this.path12 = { t: 0, vec: new Phaser.Math.Vector2() }

        var point0 = new Phaser.Math.Vector2(gWidth*0.515, gHeight*0.71)
        var point1 = new Phaser.Math.Vector2(gWidth*0.515, gHeight*0.71)
        this.control = new Phaser.Math.Vector2(gWidth*0.55, point1.y-300)

        this.curve = new Phaser.Curves.QuadraticBezier(point0, this.control, point1)

        this.puntos = this.curve.getSpacedPoints(32)

        this.point0 = this.add.image(point0.x, point0.y, 'game-puntoFinal', 0).setInteractive()
        this.controlPoint=this.add.image(this.control.x, point1.y-300, 'game-puntoFinal', 0).setInteractive().setAlpha(0)
        this.point1 = this.physics.add.image(point1.x, point1.y, 'game-puntoFinal', 0).setInteractive().setScale(300,50).setAlpha(0.0000001)

        this.point0.setData('vector', point0)
        this.controlPoint.setData('vector', this.control)
        this.point1.setData('vector', point1)

        this.point0.setData('isControl', false);
        this.controlPoint.setData('isControl', false);
        this.point1.setData('isControl', true);

        this.controlPoint.setPosition(gWidth*0.515, gHeight*0.71)
        this.controlPoint.data.get('vector').set(this.controlPoint.x, this.controlPoint.y)
        this.graphics.setAlpha(0)
        this.graphics2.setAlpha(1)

        this.tweens.add({
            targets: this.path,
            t: 0.1,
            ease: 'Sine.easeInOut',
            duration: 50,
            repeat: 0
        });
        this.tweens.add({
            targets: this.path2,
            t: 0.2,
            ease: 'Sine.easeInOut',
            duration: 50,
            repeat: 0
        });
        this.tweens.add({
            targets: this.path3,
            t: 0.3,
            ease: 'Sine.easeInOut',
            duration: 50,
            repeat: 0
        });
        this.tweens.add({
            targets: this.path4,
            t: 0.4,
            ease: 'Sine.easeInOut',
            duration: 50,
            repeat: 0
        });
        this.tweens.add({
            targets: this.path5,
            t: 0.5,
            ease: 'Sine.easeInOut',
            duration: 50,
            repeat: 0
        });
        this.tweens.add({
            targets: this.path6,
            t: 0.6,
            ease: 'Sine.easeInOut',
            duration: 50,
            repeat: 0
        });
        this.tweens.add({
            targets: this.path7,
            t: 0.7,
            ease: 'Sine.easeInOut',
            duration: 50,
            repeat: 0
        });
        this.tweens.add({
            targets: this.path8,
            t: 0.8,
            ease: 'Sine.easeInOut',
            duration: 50,
            repeat: 0
        });
        this.tweens.add({
            targets: this.path9,
            t: 0.9,
            ease: 'Sine.easeInOut',
            duration: 50,
            repeat: 0
        });
        this.tweens.add({
            targets: this.path10,
            t: 0.03,
            ease: 'Sine.easeInOut',
            duration: 50,
            repeat: 0
        });
        this.tweens.add({
            targets: this.path11,
            t: 0.85,
            ease: 'Sine.easeInOut',
            duration: 50,
            repeat: 0
        });
        this.tweens.add({
            targets: this.path12,
            t: 0.95,
            ease: 'Sine.easeInOut',
            duration: 50,
            repeat: 0
        });

        this.input.setDraggable([ this.point0, this.controlPoint, this.point1 ]);

        this.input.on('dragstart', function (pointer, gameObject) {
            thisScene.isClicking=true
            thisScene.isAux=true
        })

        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

            gameObject.x = dragX
            gameObject.y = dragY
            
            gameObject.data.get('vector').set(dragX, dragY)

            thisScene.puntos = thisScene.curve.getSpacedPoints(32)
        })

        this.input.on('dragend', function (pointer, gameObject) {
            thisScene.point1.setTexture("game-ansuelo").setScale(1,1)
            thisScene.graphics2.setAlpha(1)
            thisScene.controlPoint.y=thisScene.point1.y-500
            thisScene.controlPoint.data.get('vector').set(thisScene.controlPoint.x, thisScene.controlPoint.y)
            thisScene.auxPosition=2380-thisScene.point1.x
            thisScene.controlPoint.x=thisScene.auxPosition
            thisScene.isAux=false
            thisScene.timerBottles=thisScene.time.addEvent({
                delay: 100,
                loop: false,
                callback: () => {
                    Wait(gameObject)
                }
            })
        })
        function Wait(obj){
            obj.setPosition(thisScene.point0.x,thisScene.point0.y)
            obj.data.get('vector').set(thisScene.point0.x,thisScene.point0.y);
            thisScene.isClicking=false
            thisScene.point1.setTexture("game-puntoFinal").setScale(2,2)
            thisScene.controlPoint.setPosition(gWidth*0.515, gHeight*0.71)
            thisScene.controlPoint.data.get('vector').set(thisScene.controlPoint.x, thisScene.controlPoint.y)
            thisScene.point1.setScale(300,50)
            thisScene.point1.setAlpha(0.0000001)
        }

        thisScene.input.on("pointerup", function(pointer){
            thisScene.isClicking=false
        })
        thisScene.input.on("pointerdown", function(pointer){
            
        })

        thisScene.physics.add.overlap(thisScene.point1, thisScene.bottleGroupRigth, function(ansuelo, obj){
            if(thisScene.isClicking==false){
                obj.setTexture("game-ligth")
                thisScene.points++
                thisScene.isTouching=true
                thisScene.pointsRigth++ 
                if(thisScene.pointsRigth>9){
                    thisScene.pointsLeft++
                    thisScene.pointsRigth=0
                }    
                thisScene.leftText.setText(thisScene.pointsLeft)
                thisScene.rigthText.setText(thisScene.pointsRigth)
                if(gSound==1){
                    thisScene.correct.play()
                }
                thisScene.tweens.add({
                    targets: obj,
                    duration: 170,
                    repeat: 0,
                    ease: "Circ",
                    yoyo: 1,
                    scale: obj.scale*1.3
                }) 
                thisScene.timerObjs=thisScene.time.addEvent({
                    delay: 400,
                    loop: false,
                    callback: () => {
                        Wait2(obj)
                    }
                })
            }
        })

        thisScene.physics.add.overlap(thisScene.point1, thisScene.bottleGroupLeft, function(ansuelo, obj){
            if(thisScene.isClicking==false){
                obj.setTexture("game-ligth")
                thisScene.points++
                thisScene.isTouching=true
                thisScene.pointsRigth++      
                if(thisScene.pointsRigth>9){
                    thisScene.pointsLeft++
                    thisScene.pointsRigth=0
                }
                thisScene.leftText.setText(thisScene.pointsLeft)
                thisScene.rigthText.setText(thisScene.pointsRigth)
                if(gSound==1){
                    thisScene.correct.play()
                }
                thisScene.tweens.add({
                    targets: obj,
                    duration: 170,
                    repeat: 0,
                    ease: "Circ",
                    yoyo: 1,
                    scale: obj.scale*1.3
                }) 
                thisScene.timerObjs=thisScene.time.addEvent({
                    delay: 400,
                    loop: false,
                    callback: () => {
                        Wait2(obj)
                    }
                })
            }
        })

        this.physics.add.overlap(this.point1, this.obj1Group, obj1Collider)
        function obj1Collider(ansuelo, obj){
            if(thisScene.isClicking==false){
                
                    obj.setAlpha(0.5)
                    thisScene.lifes--
                    if(thisScene.lifes==2){
                        thisScene.ansuelo3.setVisible(false)
                    }
                    if(thisScene.lifes==1){
                        thisScene.ansuelo2.setVisible(false)
                    }
                    if(thisScene.lifes==0){
                        thisScene.ansuelo1.setVisible(false)
                        gPoints=thisScene.points
                        if(gPoints>gBest){
                            gBest=gPoints
                        }
                        if(thisScene.points==0){
                            thisScene.scene.pause()
                            thisScene.scene.launch("DefeatScene")
                        }
                        else{
                            thisScene.scene.pause()
                            thisScene.scene.launch("VictoryScene")
                        }
                        
                    }
                    if(gSound==1){
                        thisScene.incorrect.play()
                    }
                    thisScene.isClicking=false
                    thisScene.timerObjs=thisScene.time.addEvent({
                        delay: 400,
                        loop: false,
                        callback: () => {
                            Wait2(obj)
                        }
                    })
                
                
            }
        }
        this.physics.add.overlap(this.point1, this.obj2Group, obj2Collider)
        function obj2Collider(ansuelo, obj){
            if(thisScene.isClicking==false){
                
                    obj.setAlpha(0.5)
                    thisScene.lifes--
                    if(thisScene.lifes==2){
                        thisScene.ansuelo3.setVisible(false)
                    }
                    if(thisScene.lifes==1){
                        thisScene.ansuelo2.setVisible(false)
                    }
                    if(thisScene.lifes==0){
                        thisScene.ansuelo1.setVisible(false)
                        gPoints=thisScene.points
                        if(gPoints>gBest){
                            gBest=gPoints
                        }
                        if(thisScene.points==0){
                            thisScene.scene.pause()
                            thisScene.scene.launch("DefeatScene")
                        }
                        else{
                            thisScene.scene.pause()
                            thisScene.scene.launch("VictoryScene")
                        }
                    }
                    if(gSound==1){
                        thisScene.incorrect.play()
                    }
                    thisScene.isClicking=false
                    thisScene.timerObjs=thisScene.time.addEvent({
                        delay: 400,
                        loop: false,
                        callback: () => {
                            Wait2(obj)
                        }
                    })
                
                
            }
        }
        this.physics.add.overlap(this.point1, this.obj3Group, obj3Collider)
        function obj3Collider(ansuelo, obj){
            if(thisScene.isClicking==false){
                
                    obj.setAlpha(0.5)
                    thisScene.lifes--
                    if(thisScene.lifes==2){
                        thisScene.ansuelo3.setVisible(false)
                    }
                    if(thisScene.lifes==1){
                        thisScene.ansuelo2.setVisible(false)
                    }
                    if(thisScene.lifes==0){
                        thisScene.ansuelo1.setVisible(false)
                        gPoints=thisScene.points
                        if(gPoints>gBest){
                            gBest=gPoints
                        }
                        if(thisScene.points==0){
                            thisScene.scene.pause()
                            thisScene.scene.launch("DefeatScene")
                        }
                        else{
                            thisScene.scene.pause()
                            thisScene.scene.launch("VictoryScene")
                        }
                    }
                    if(gSound==1){
                        thisScene.incorrect.play()
                    }
                    thisScene.isClicking=false
                    thisScene.timerObjs=thisScene.time.addEvent({
                        delay: 400,
                        loop: false,
                        callback: () => {
                            Wait2(obj)
                        }
                    })
                
                
            }
        }
        this.physics.add.overlap(this.point1, this.obj4Group, obj4Collider)
        function obj4Collider(ansuelo, obj){
            if(thisScene.isClicking==false){
               
                    obj.setAlpha(0.5)
                    thisScene.lifes--
                    if(thisScene.lifes==2){
                        thisScene.ansuelo3.setVisible(false)
                    }
                    if(thisScene.lifes==1){
                        thisScene.ansuelo2.setVisible(false)
                    }
                    if(thisScene.lifes==0){
                        thisScene.ansuelo1.setVisible(false)
                        gPoints=thisScene.points
                        if(gPoints>gBest){
                            gBest=gPoints
                        }
                        if(thisScene.points==0){
                            thisScene.scene.pause()
                            thisScene.scene.launch("DefeatScene")
                        }
                        else{
                            thisScene.scene.pause()
                            thisScene.scene.launch("VictoryScene")
                        }
                    }
                    if(gSound==1){
                        thisScene.incorrect.play()
                    }
                    thisScene.isClicking=false
                    thisScene.timerObjs=thisScene.time.addEvent({
                        delay: 400,
                        loop: false,
                        callback: () => {
                            Wait2(obj)
                        }
                    })
                
                
            }
        }
        this.physics.add.overlap(this.point1, this.obj5Group, obj5Collider)
        function obj5Collider(ansuelo, obj){
            if(thisScene.isClicking==false){
                
                    obj.setAlpha(0.5)
                    thisScene.lifes--
                    if(thisScene.lifes==2){
                        thisScene.ansuelo3.setVisible(false)
                    }
                    if(thisScene.lifes==1){
                        thisScene.ansuelo2.setVisible(false)
                    }
                    if(thisScene.lifes==0){
                        thisScene.ansuelo1.setVisible(false)
                        gPoints=thisScene.points
                        if(gPoints>gBest){
                            gBest=gPoints
                        }
                        if(thisScene.points==0){
                            thisScene.scene.pause()
                            thisScene.scene.launch("DefeatScene")
                        }
                        else{
                            thisScene.scene.pause()
                            thisScene.scene.launch("VictoryScene")
                        }
                    }
                    if(gSound==1){
                        thisScene.incorrect.play()
                    }
                    thisScene.isClicking=false
                    thisScene.timerObjs=thisScene.time.addEvent({
                        delay: 400,
                        loop: false,
                        callback: () => {
                            Wait2(obj)
                        }
                    })
                
                
            }
        }
        this.physics.add.overlap(this.point1, this.obj6Group, obj6Collider)
        function obj6Collider(ansuelo, obj){
            if(thisScene.isClicking==false){
                
                    obj.setAlpha(0.5)
                    thisScene.lifes--
                    if(thisScene.lifes==2){
                        thisScene.ansuelo3.setVisible(false)
                    }
                    if(thisScene.lifes==1){
                        thisScene.ansuelo2.setVisible(false)
                    }
                    if(thisScene.lifes==0){
                        thisScene.ansuelo1.setVisible(false)
                        gPoints=thisScene.points
                        if(gPoints>gBest){
                            gBest=gPoints
                        }
                        if(thisScene.points==0){
                            thisScene.scene.pause()
                            thisScene.scene.launch("DefeatScene")
                        }
                        else{
                            thisScene.scene.pause()
                            thisScene.scene.launch("VictoryScene")
                        }
                    }
                    if(gSound==1){
                        thisScene.incorrect.play()
                    }
                    thisScene.isClicking=false
                    thisScene.timerObjs=thisScene.time.addEvent({
                        delay: 400,
                        loop: false,
                        callback: () => {
                            Wait2(obj)
                        }
                    })
                
                    
            }
        }

        this.physics.add.overlap(this.point1, [this.objSi1, this.objSi2, this.objSi3, this.objSi4, this.objSi5, this.objSi6], objSiCollider)
        function objSiCollider(ansuelo, obj){
            if(thisScene.isClicking==false){
                
                    thisScene.points++
                    thisScene.isTouching=true
                    thisScene.pointsRigth++      
                    if(thisScene.pointsRigth>9){
                        thisScene.pointsLeft++
                        thisScene.pointsRigth=0
                    }
                    thisScene.leftText.setText(thisScene.pointsLeft)
                    thisScene.rigthText.setText(thisScene.pointsRigth)
                    if(gSound==1){
                        thisScene.correct.play()
                    }
                    thisScene.tweens.add({
                        targets: obj,
                        duration: 170,
                        repeat: 0,
                        ease: "Circ",
                        yoyo: 1,
                        scale: obj.scale*1.3
                    }) 
                    thisScene.timerObjs=thisScene.time.addEvent({
                        delay: 400,
                        loop: false,
                        callback: () => {
                            Wait2(obj)
                        }
                    })
                    
                    
            }
        }

        function Wait2(obj){
            thisScene.obj1Group.killAndHide(obj)
            obj.body.enable=false
            thisScene.obj2Group.killAndHide(obj)
            thisScene.obj3Group.killAndHide(obj)
            thisScene.obj4Group.killAndHide(obj)
            thisScene.obj5Group.killAndHide(obj)
            thisScene.obj6Group.killAndHide(obj)
            thisScene.objSi1.killAndHide(obj)
            thisScene.objSi2.killAndHide(obj)
            thisScene.objSi3.killAndHide(obj)
            thisScene.objSi4.killAndHide(obj)
            thisScene.objSi5.killAndHide(obj)
            thisScene.objSi6.killAndHide(obj)
            thisScene.bottleGroupRigth.killAndHide(obj)
            thisScene.bottleGroupLeft.killAndHide(obj)
            obj.body.enable=false
        }

        // ========================================================= DESTRUCTORES =========================================================
        this.physics.add.overlap( this.destroy2, this.obj1Group, destroyer1)
        function destroyer1 (destroyer, obj){
            /*thisScene.obj1Group.killAndHide(obj)
            obj.body.enable = false*/
            obj.destroy()
        }
        this.physics.add.overlap( this.destroy1, this.obj2Group, destroyer2)
        function destroyer2 (destroyer, obj){
            /*thisScene.obj2Group.killAndHide(obj)
            obj.body.enable = false*/
            obj.destroy()
        }
        this.physics.add.overlap( this.destroy2, this.obj3Group, destroyer3)
        function destroyer3 (destroyer, obj){
            /*thisScene.obj3Group.killAndHide(obj)
            obj.body.enable = false*/
            obj.destroy()
        }
        this.physics.add.overlap( this.destroy1, this.obj4Group, destroyer4)
        function destroyer4 (destroyer, obj){
            /*thisScene.obj4Group.killAndHide(obj)
            obj.body.enable = false*/
            obj.destroy()
        }
        this.physics.add.overlap( this.destroy2, this.obj5Group, destroyer5)
        function destroyer5 (destroyer, obj){
            /*thisScene.obj5Group.killAndHide(obj)
            obj.body.enable = false*/
            obj.destroy()
        }
        this.physics.add.overlap( this.destroy1, this.obj6Group, destroyer6)
        function destroyer6 (destroyer, obj){
            /*thisScene.obj6Group.killAndHide(obj)
            obj.body.enable = false*/
            obj.destroy()
        }
        this.physics.add.overlap( this.destroy1, this.bottleGroupRigth, destroyerBottleRigth)
        function destroyerBottleRigth (destroyer, obj){
            /*thisScene.bottleGroupRigth.killAndHide(obj)
            obj.body.enable = false*/
            obj.destroy()
        }
        this.physics.add.overlap( this.destroy2, this.bottleGroupLeft, destroyerBottleLeft)
        function destroyerBottleLeft (destroyer, obj){
            /*thisScene.bottleGroupLeft.killAndHide(obj)
            obj.body.enable = false*/
            obj.destroy()
        }

        this.physics.add.overlap( this.destroy1, [this.objSi2, this.objSi4, this.objSi6], destroyerSiRigth)
        function destroyerSiRigth (destroyer, obj){
            obj.destroy()
        }

        this.physics.add.overlap( this.destroy2, [this.objSi1, this.objSi3, this.objSi5], destroyerSiLeft)
        function destroyerSiLeft(destroyer, obj){
            obj.destroy()
        }

        //=========================================================================================================================

        thisScene.leftText.setText(thisScene.pointsLeft)
        thisScene.rigthText.setText(thisScene.pointsRigth)

        if(gSound==1){
            if(gMusic==1){
                this.splash.setMute(false)
            }
            else if(gMusic==-1){
                this.splash.setMute(true)
            }
            //game.sound.mute=false
        }
        else if(gSound==-1){
            //game.sound.mute=true
        }

        this.scene.pause()
        this.scene.launch("HelpScene")
        
    }

    // ==================================================   UPDATE  ==============================================================
    update(){
        let thisScene=this
        //console.log(this.isClicking)
        // =============================================== MOVIMIENTO CAÑA ========================================================
        


       // ==========================================================  NUBES  ==========================================================

       if(this.cloud1.x>gWidth*1.10){
        this.cloud1.x=gWidth*-0.10
        }
        if(this.cloud2.x>gWidth*1.10){
            this.cloud2.x=gWidth*-0.10
        }
        if(this.cloud3.x>gWidth*1.10){
            this.cloud3.x=gWidth*-0.10
        }

        // ====================================================  HUD  ==================================================================

        

        this.leftText.setText(this.pointsLeft)
        this.rigthText.setText(this.pointsRigth)


        
        

        //======================================================== CAÑA ==================================================================
        this.graphics.clear()
        this.graphics2.clear()
        this.graphics.lineStyle(4, 0xffffff, 0)
        this.graphics2.lineStyle(4, 0xffffff, 1)
        

        this.curve.draw(this.graphics)
        this.curve.draw(this.graphics2)

        this.curve.getPoint(this.path.t, this.path.vec)
        this.curve.getPoint(this.path2.t, this.path2.vec)
        this.curve.getPoint(this.path3.t, this.path3.vec)
        this.curve.getPoint(this.path4.t, this.path4.vec)
        this.curve.getPoint(this.path5.t, this.path5.vec)
        this.curve.getPoint(this.path6.t, this.path6.vec)
        this.curve.getPoint(this.path7.t, this.path7.vec)
        this.curve.getPoint(this.path8.t, this.path8.vec)
        this.curve.getPoint(this.path9.t, this.path9.vec)
        this.curve.getPoint(this.path10.t, this.path10.vec)
        this.curve.getPoint(this.path11.t, this.path11.vec)
        this.curve.getPoint(this.path12.t, this.path12.vec)

        this.graphics.fillStyle(0xffffff, 1)
        this.graphics.fillCircle(this.path.vec.x, this.path.vec.y, 16)
        this.graphics.fillCircle(this.path2.vec.x, this.path2.vec.y, 15)
        this.graphics.fillCircle(this.path3.vec.x, this.path3.vec.y, 14)
        this.graphics.fillCircle(this.path4.vec.x, this.path4.vec.y, 13)
        this.graphics.fillCircle(this.path5.vec.x, this.path5.vec.y, 12)
        this.graphics.fillCircle(this.path6.vec.x, this.path6.vec.y, 11)
        this.graphics.fillCircle(this.path7.vec.x, this.path7.vec.y, 10)
        this.graphics.fillCircle(this.path8.vec.x, this.path8.vec.y, 9)
        this.graphics.fillCircle(this.path9.vec.x, this.path9.vec.y, 7)
        this.graphics.fillCircle(this.path10.vec.x, this.path10.vec.y, 17)
        this.graphics.fillCircle(this.path11.vec.x, this.path11.vec.y, 8)
        this.graphics.fillCircle(this.path12.vec.x, this.path12.vec.y, 6)

        if(this.isClicking){
            this.controlPoint.y=this.point1.y-500
            this.controlPoint.data.get('vector').set(this.controlPoint.x, this.controlPoint.y)
            this.auxPosition=2380-this.point1.x
            this.controlPoint.x=this.auxPosition
            this.graphics.setAlpha(1)
            this.graphics2.setAlpha(0)
            this.point1.body.enable=true
        }
        else{
            //this.controlPoint.setPosition(gWidth*0.515, gHeight*0.71)
            //this.controlPoint.data.get('vector').set(this.controlPoint.x, this.controlPoint.y)
            this.graphics.setAlpha(0)
            this.graphics2.setAlpha(1)
            this.point1.body.enable=false
        } 

        if(this.point1.x>gWidth*0.50){
            this.point1.flipX=true
        }
        else{
            this.point1.flipX=false
        }

        if(this.isClicking){
            this.point1.setScale(2,2)
            this.point1.setAlpha(1)
        }

        // ========================================================= VERSION LITE =========================================================
        /*if (gTimesPlayed== 5) {
            if (gLogin == false) {
                thisScene.scene.pause()
                try {
                    document.getElementById("modalFrame").setAttribute("style", "display:block;")
                } catch {
                    console.log('modal')
                }


                (function(window) {
                    var el = document.getElementById('login-btn');
                    el.addEventListener('click', (e) => {
                        e.preventDefault();
                        // Dispatch deep-link
                        document.location = 'dkids-latam://discoverykidsplus.com/login';
                        // Redirect to the parent if deep-link is not available
                        gLogin = true
                        setTimeout(function() {
                            if (window.location !== window.top.location) {
                                window.top.location = window.top.location.protocol + '//' + window.top.location.host + '/login';
                            }
                        }, 300);
                    }, false);
                    var el2 = document.getElementById('later-btn')
                    el2.addEventListener('click', (e) => {
                        e.preventDefault();
                        console.log("closeModal")
                        document.getElementById("modalFrame").setAttribute("style", "display:none;")
                        thisScene.sound.stopAll()
                        thisScene.scene.stop()
                        thisScene.scene.start("SplashScene")
                    }, false);
                })(this);

            }
        }*/
    }
    //==================================================================================================================================

    // ========================================================= SPAWNERS =========================================================

    Spawner1(){
        this.aux1=Phaser.Math.Between(1,6)
        if(this.aux1==3 || this.aux1==4){
            this.spawner1Si=this.physics.add.image(gWidth*-0.10, gHeight*0.30, this.objects[this.aux1]).setScale(0.30,0.30).setSize(100,100)
            this.tweens.add({
                targets: this.spawner1Si,
                y: "-= 50",
                ease: "Sinusoidal",
                //duration: 3000,
                duration: 2200,
                repeat: -1,
                yoyo: true
            })
            this.objSi1.add(this.spawner1Si).setVelocityX(55)
            this.layer1.add(this.spawner1Si)
        }
        else{
            this.spawner1=this.physics.add.image(gWidth*-0.10, gHeight*0.30, this.objects[this.aux1]).setScale(0.30,0.30).setSize(100,100)
            this.tweens.add({
                targets: this.spawner1,
                y: "-= 50",
                ease: "Sinusoidal",
                //duration: 3000,
                duration: 2200,
                repeat: -1,
                yoyo: true
            })
            this.obj1Group.add(this.spawner1).setVelocityX(55)
            this.layer1.add(this.spawner1)
        }
        
    }
    Spawner2(){
        this.aux2=Phaser.Math.Between(1,6)
        if(this.aux2==3 || this.aux2==4){
            this.spawner2Si=this.physics.add.image(gWidth*1.10, gHeight*0.37, this.objects[this.aux2]).setScale(0.40,0.40).setSize(120,120)
            this.tweens.add({
                targets: this.spawner2Si,
                y: "-= 50",
                ease: "Sinusoidal",
                //duration: 1500,
                duration: 2500,
                repeat: -1,
                yoyo: true
            })
            this.spawner2Si.flipX=true
            this.objSi2.add(this.spawner2Si).setVelocityX(-55)
            this.layer2.add(this.spawner2Si)
        }
        else{
            this.spawner2=this.physics.add.image(gWidth*1.10, gHeight*0.37, this.objects[this.aux2]).setScale(0.40,0.40).setSize(120,120)
            this.tweens.add({
                targets: this.spawner2,
                y: "-= 50",
                ease: "Sinusoidal",
                //duration: 1500,
                duration: 2500,
                repeat: -1,
                yoyo: true
            })
            this.spawner2.flipX=true
            this.obj2Group.add(this.spawner2).setVelocityX(-55)
            this.layer2.add(this.spawner2)
        }
        
    }
    Spawner3(){
        this.aux3=Phaser.Math.Between(1,6)
        if(this.aux3==3 || this.aux3==4){
            this.spawner3Si=this.physics.add.image(gWidth*-0.10, gHeight*0.45, this.objects[this.aux3]).setScale(0.50,0.50).setSize(140,140)
            this.tweens.add({
                targets: this.spawner3Si,
                y: "-= 50",
                ease: "Sinusoidal",
                //duration: 2000,
                duration: 2200,
                repeat: -1,
                yoyo: true
            })
            this.objSi3.add(this.spawner3Si).setVelocityX(55)
            this.layer3.add(this.spawner3Si)
        }
        else{
            this.spawner3=this.physics.add.image(gWidth*-0.10, gHeight*0.45, this.objects[this.aux3]).setScale(0.50,0.50).setSize(140,140)
            this.tweens.add({
                targets: this.spawner3,
                y: "-= 50",
                ease: "Sinusoidal",
                //duration: 2000,
                duration: 2200,
                repeat: -1,
                yoyo: true
            })
            this.obj3Group.add(this.spawner3).setVelocityX(55)
            this.layer3.add(this.spawner3)
        
        }  
    }
    Spawner4(){
        this.aux4=Phaser.Math.Between(1,6)
        if(this.aux4==3 || this.aux4==4){
            this.spawner4Si=this.physics.add.image(gWidth*1.10, gHeight*0.50, this.objects[this.aux4]).setScale(0.60,0.60).setSize(160,160)
            this.tweens.add({
                targets: this.spawner4Si,
                y: "-= 50",
                ease: "Sinusoidal",
                //duration: 2200,
                duration: 2500,
                repeat: -1,
                yoyo: true
            })
            this.spawner4Si.flipX=true
            this.objSi4.add(this.spawner4Si).setVelocityX(-55)
            this.layer4.add(this.spawner4Si)
        }
        else{
            this.spawner4=this.physics.add.image(gWidth*1.10, gHeight*0.50, this.objects[this.aux4]).setScale(0.60,0.60).setSize(160,160)
            this.tweens.add({
                targets: this.spawner4,
                y: "-= 50",
                ease: "Sinusoidal",
                //duration: 2200,
                duration: 2500,
                repeat: -1,
                yoyo: true
            })
            this.spawner4.flipX=true
            this.obj4Group.add(this.spawner4).setVelocityX(-55)
            this.layer4.add(this.spawner4)
        }
    }
    Spawner5(){
        this.aux5=Phaser.Math.Between(1,6)
        if(this.aux5==3 || this.aux5==4){
            this.spawner5Si=this.physics.add.image(gWidth*-0.10, gHeight*0.60, this.objects[this.aux5]).setScale(0.70,0.70).setSize(180,180)
            this.tweens.add({
                targets: this.spawner5Si,
                y: "-= 50",
                ease: "Sinusoidal",
                //duration: 1800,
                duration: 2200,
                repeat: -1,
                yoyo: true
            })
            this.objSi5.add(this.spawner5Si).setVelocityX(55)
            this.layer5.add(this.spawner5Si)
        }
        else{
            this.spawner5=this.physics.add.image(gWidth*-0.10, gHeight*0.60, this.objects[this.aux5]).setScale(0.70,0.70).setSize(180,180)
            this.tweens.add({
                targets: this.spawner5,
                y: "-= 50",
                ease: "Sinusoidal",
                //duration: 1800,
                duration: 2200,
                repeat: -1,
                yoyo: true
            })
            this.obj5Group.add(this.spawner5).setVelocityX(55)
            this.layer5.add(this.spawner5)
        }
    }
    Spawner6(){
        this.aux6=Phaser.Math.Between(1,6)
        if(this.aux6==3 || this.aux6==4){
            this.spawner6Si=this.physics.add.sprite(gWidth*1.10, gHeight*0.70, this.objects[this.aux6]).setScale(0.80,0.80).setSize(200,200)
            this.tweens.add({
                targets: this.spawner6Si,
                y: "-= 50",
                ease: "Sinusoidal",
                //duration: 2500,
                duration: 2500,
                repeat: -1,
                yoyo: true
            })
            this.spawner6Si.flipX=true
            this.objSi6.add(this.spawner6Si).setVelocityX(-55)
            this.layer6.add(this.spawner6Si)
        }
        else{
            this.spawner6=this.physics.add.sprite(gWidth*1.10, gHeight*0.70, this.objects[this.aux6]).setScale(0.80,0.80).setSize(200,200)
            this.tweens.add({
                targets: this.spawner6,
                y: "-= 50",
                ease: "Sinusoidal",
                //duration: 2500,
                duration: 2500,
                repeat: -1,
                yoyo: true
            })
            this.spawner6.flipX=true
            this.obj6Group.add(this.spawner6).setVelocityX(-55)
            this.layer6.add(this.spawner6)
        }
    }

    SpawnerBottles(){
        while(this.aux==this.lastAux || this.aux==this.lastAux2){
            this.aux=Phaser.Math.Between(1,7)
        }
        
        if(this.aux%2==0){
            this.bottle=this.physics.add.image(gWidth*1.10, gHeight*this.aux/10, this.objects[0]).setScale((this.aux+1)/10, (this.aux+1)/10,).setSize(150,200)
            this.bottle.flipX=true
            this.bottleGroupRigth.add(this.bottle).setVelocityX(-100)
        }
        else{
            this.bottle=this.physics.add.image(gWidth*-0.10, gHeight*this.aux/10, this.objects[0]).setScale((this.aux+1)/10, (this.aux+1)/10,).setSize(150,200)
            this.bottleGroupLeft.add(this.bottle).setVelocityX(+100)
        }

        if(this.aux==1){
            this.bottle.y+=200
            this.layerBottle1.add(this.bottle)
        }
        else if(this.aux==2){
            this.bottle.y+=120
            this.layerBottle2.add(this.bottle)
        }
        else if(this.aux==3){
            this.bottle.y+=80
            this.layerBottle3.add(this.bottle)
        }
        else if(this.aux==4){
            this.bottle.y+=50
            this.layerBottle4.add(this.bottle)
        }
        else if(this.aux==5){
            this.layerBottle5.add(this.bottle)
        }
        else if(this.aux==6){
            this.layerBottle6.add(this.bottle)
        }
        else {
            this.layerBottle7.add(this.bottle)
        }

        this.tweens.add({
            targets: this.bottle,
            y: "-= 30",
            ease: "Sinusoidal",
            duration: 1800,
            repeat: -1,
            yoyo: true
        })

        this.lastAux2=this.lastAux
        this.lastAux=this.aux
    }

    ReturnSprite(){
        this.ansuelo.setTexture("game-puntoFinal")
        this.cana.setTexture("game-cañaPuntos")
        this.ansuelo.y+=30
    }

    /*startDrag(pointer, targets){
        this.lampo.stop("game-puntoFinal")
        this.lampo.setTexture("game-puntoFinal")
        this.pointsImage=this.add.group()
        this.pointsToRender=6
        this.input.off("pointerdown", this.startDrag, this)
        this.input.on("pointermove", this.doDrag, this)
        this.input.on("pointerup", this.stopDrag, this)
    }

    doDrag(pointer){
        for(let i=0; i<5 ; i++){
            this.pointsImage.getChildren().map(image=>image.destroy())
        }

        for(let t=0; t<this.pointsToRender; t++){
            if(this.pointsImage.getLength()< thisScene.pointsToRender){
                this.force={
                    x:(pointer.x-this.ballInitPosition.x)/this.xForceBrake*40,
                    y:(pointer.y-this.ballInitPosition.y)/this.yForceBrake*50
                }
                let pointX=this.ball.x+this.force.x*(t*3.5)
                let pointY=this.ball.y+this.force.y*(t*3.5)
                this.point=this.pointsImage.create(pointX, pointY, "gamePointer")

                this.point.setScale(2/t)
                if(t<2){
                    this.point.setScale(1)
                }
            }
        }
    }

    stopDrag(){
        for(let i=0; i<5; i++){
            this.pointsImage.getChildren().map(image=>image.destroy())
        }
        this.input.on("pointerdown", this.startDrag, this)
        this.input.off("pointermove", this.doDrag, this)
        this.input.off("pointerup", this.stopDrag, this)
    }*/
}