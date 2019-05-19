import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-level1',
  templateUrl: './level1.component.html',
  styleUrls: ['./level1.component.css']
})
export class Level1Component implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  //Initialisation Canvas
  ngAfterViewInit(){
    //Taille du Canvas
    let canvasWidth = 1200;
    let canvasHeight = 800;

    //Taille du sprite
    let spriteWidth = 810;
    let spriteHeight = 1080;

    //Structure du sprite
    let rows = 9;
    let cols = 9;

    //Taille/structure Sprite
    let width = spriteWidth/cols;
    let height = spriteHeight/rows;

    //Premiere image
    let curFrame = 0;

    //Total images
    let frameCount = 9;

    //Coordonées sprite
    let x=400;
    let y=420;

    //x and y coordinates of the canvas to get the single frame
    let srcX= 0;
    let srcY= 0;

    //Coordonnées background
    let bX = 0;
    let bY = 1080;
    let tBX = bX;
    let tBY = bY;

    let canvas : any= document.getElementById('sonic');

    //Propriété du Canvas
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    let background = new Image();
    background.src = "../../assets/images/maptest.png";

    let ctx = canvas.getContext("2d");

    //Creation de Sonic
    let sonic = new Image();
    sonic.src = "../../assets/images/sonic.png";
    //Sprite Ring
    let ring = new Image();
    ring.src = "../../assets/images/ring.png";

    let ringWidth = 1020;
    let ringHeight = 65;
    let ringRows = 1;
    let ringCols = 16;
    let rWidth = ringWidth/ringCols;
    let rHeight = ringHeight/ringRows;
    let ringCurFrame = 0;
    let ringFrameCount = 16;
    let ringX=800;
    let ringY=420;
    let ringSrcX= 0;
    let ringSrcY= 0;


    function updateFrame(){
        //Rafraichissement
        curFrame = ++curFrame % frameCount;
        //Calcul coordonnées du sprite
        srcX = curFrame * width;
        ctx.clearRect(x,y,width,height);

        ringCurFrame = ++ringCurFrame % ringFrameCount;
        ringSrcX = ringCurFrame * rWidth;
        ctx.clearRect(ringX,ringY,rWidth,rHeight);
    }

    //Controls
    //(delay saut retour position initiale)
    let posInit = true;
    function posInitActivate (){
        posInit = true;
    };

    let keyState = {};
    document.addEventListener('keydown',function(e){
        keyState[e.keyCode || e.which] = true;
    },true);
    document.addEventListener('keyup',function(e){
        keyState[e.keyCode || e.which] = false;
        if(posInit){
        initDroit()
        }
    },true);

    function gameLoop() {
        //Control droit
        if (keyState[39] || keyState[68]){
            bX += 2;
            ringX -=2;
            droite();
        }
        if (keyState[39]&& keyState[16] || keyState[68] && keyState[16]){
            bX += 3;
            ringX -=3;
            courirDroit();
        }
        //Control gauche
        if (keyState[37] || keyState[65]){
            bX -= 2;
            ringX +=2;
            gauche();
        }
        if (keyState[37]&& keyState[16] || keyState[65] && keyState[16]){
            bX -= 3;
            ringX +=3;
            courirGauche();
        }
        //Control Boule
        if (keyState[83] || keyState[40]){
            boule();
            if (keyState[39]&& keyState[16] || keyState[68] && keyState[16]){
                bX += 3;
                ringX -=3;
                bouleRapideDroit();
                }
            if (keyState[37]&& keyState[16] || keyState[65] && keyState[16]){
                bX -= 3;
                ringX +=3;
                bouleRapideGauche();
                }
        }
        //Control Saut
        if (keyState[32]){
            sautDroit()
            animSaut();
        }

        if (keyState[32] && keyState[68] || keyState[32] && keyState[39]){
            sautDroit();
            animSaut();
        }

        if (keyState[32] && keyState[65] || keyState[32] && keyState[37]){
            sautGauche()
            animSaut();
        }

        setTimeout(gameLoop, 10);
    }
    gameLoop();

    function draw(){
        //Rafraichissement
        updateFrame();
        ctx.drawImage(background,bX,0,1400,bY,0,-100,1200,900);
        ctx.drawImage(ring,ringSrcX, ringSrcY,rWidth,rHeight,ringX,ringY,rWidth,rHeight);
        ctx.drawImage(sonic,srcX,srcY,width,height,x,y,width,height);
    }

    function initDroit(){
        posInitActivate();
        rows = 9;
        cols = 9;
        y=420;
        spriteWidth = 810;
        spriteHeight = 1080;
        width = spriteWidth/cols;
        height = spriteHeight/rows;
        frameCount = 9;
        srcX= 0;
        srcY= 0;
    }

    function initGauche(){
        rows = 9;
        cols = 6;
        y=420;
        spriteWidth = 540;
        spriteHeight = 1080;
        width = spriteWidth/cols;
        height = spriteHeight/rows;
        frameCount = 6;
        srcX= 0;
        srcY= 715;
    }

    function droite(){
        rows = 9;
        cols = 3;
        y=420;
        spriteWidth = 288;
        spriteHeight = 1080;
        width = spriteWidth/cols;
        height = spriteHeight/rows;
        frameCount = 3;
        srcX= 0;
        srcY= 130;
    }

    function gauche(){
        rows = 9;
        cols = 3;
        y=420;
        spriteWidth = 285;
        spriteHeight = 1080;
        width = spriteWidth/cols;
        height = spriteHeight/rows;
        frameCount = 3;
        srcX= 0;
        srcY= 590;
    }

    function boule(){
        rows = 9;
        cols = 4;
        y=480;
        spriteWidth = 289;
        spriteHeight = 600;
        width = spriteWidth/cols;
        height = spriteHeight/rows;
        frameCount = 4;
        srcX= 0;
        srcY= 380;
    }

    function bouleRapideDroit(){
        rows = 9;
        cols = 3;
        y=469;
        spriteWidth = 330;
        spriteHeight = 630;
        width = spriteWidth/cols;
        height = spriteHeight/rows;
        frameCount = 3;
        srcX= 0;
        srcY= 980;
    }

    function bouleRapideGauche(){
        rows = 9;
        cols = 3;
        y=469;
        spriteWidth = 330;
        spriteHeight = 630;
        width = spriteWidth/cols;
        height = spriteHeight/rows;
        frameCount = 3;
        srcX= 0;
        srcY= 1065;
    }

    function courirDroit(){
        rows = 9;
        cols = 4;
        y=420;
        spriteWidth = 400;
        spriteHeight = 1080;
        width = spriteWidth/cols;
        height = spriteHeight/rows;
        frameCount = 4;
        srcX= 0;
        srcY= 258;
    }

    function courirGauche(){
        rows = 9;
        cols = 4;
        y=420;
        spriteWidth = 440;
        spriteHeight = 1080;
        width = spriteWidth/cols;
        height = spriteHeight/rows;
        frameCount = 4;
        srcX= 0;
        srcY= 850;
    }

    function sautDroit(){
        posInit = false
        rows = 9;
        cols = 5;
        y=420;
        spriteWidth = 450;
        spriteHeight = 1100;
        width = spriteWidth/cols;
        height = spriteHeight/rows;
        frameCount = 4;
        srcX= 0;
        srcY= 456;
        setTimeout(initDroit,500)
    }

    function sautGauche(){
        posInit = false
        rows = 9;
        cols = 5;
        y=420;
        spriteWidth = 450;
        spriteHeight = 1070;
        width = spriteWidth/cols;
        height = spriteHeight/rows;
        frameCount = 4;
        srcX= 0;
        srcY= 1157;
        setTimeout(initDroit,500)
    }

    function animSaut(){
        setTimeout(function(){bY+=10; ringY-=10},100)
        setTimeout(function(){bY+=10; ringY-=10},200)
        setTimeout(function(){bY+=5; ringY-=5},100)
        setTimeout(function(){bY-=15; ringY+=15},100)
        setTimeout(function(){bY-=10; ringY+=10},100)
    }

    setInterval(draw,80);

  }
}
