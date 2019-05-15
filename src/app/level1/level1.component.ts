import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-level1',
  templateUrl: './level1.component.html',
  styleUrls: ['./level1.component.css']
})
export class Level1Component implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.drawSquare();
    this.drawStage();
    this.drawBackground();
  }

  drawBackground() {
    let canvas = document.getElementById('stage');
    let ctx = canvas.getContext("2d");

  }

  drawStage(){
    let img1 = new Image();
    img1.onload = function(){
      ctx.drawImage(img1, 0, 0, 1200, 800)
    }
    img1.src = '../../assets/images/fond.png';
    var audio = new Audio('./common/mp3/2006.mp3');
    let img = new Image();
    img.src = "../../assets/images/sonic.png";
    var canvas;
    canvas = document.getElementById("stage");
    var x = 0;
    var y = 0;
    var xtmp = 0;
    var ytmp = 0;
    var ctx = canvas.getContext("2d");
    img.onload = function() {
      init();
    };
    var repanim;
    const scale = .5;
    const width = 95;
    const height = 120;
    const scaledWidth = scale * width;
    const scaledHeight = scale * height;

    function drawFrame(frameX, frameY, canvasX, canvasY){
      ctx.drawImage(img, frameX*width - 2, frameY*height, width, height,
        canvasX, canvasY, scaledWidth, scaledHeight);
      }

      function init() {
        repanim = window.requestAnimationFrame(step);
      }

      const cycleLoop = [1, 2, 3, 4];
      let currentLoopIndex = 0;
      let frameCount = 0;

      function step() {
        frameCount++;
        if (frameCount < 10) {
          repanim = window.requestAnimationFrame(step);
          return;
        }
        frameCount = 0;
        ctx.clearRect(x, y, scaledWidth, scaledHeight);
        // ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawFrame(cycleLoop[currentLoopIndex], 0, x, y);
        currentLoopIndex++;
        if (currentLoopIndex >= cycleLoop.length) {
          currentLoopIndex = 0;
        }
        repanim = window.requestAnimationFrame(step);
      }

      // document.addEventListener("keyup", controls);
      // document.addEventListener("keydown", controls);
      document.addEventListener("keypress", controls);

      function controls(event) {
        if (event.key == 'a') {
          deplgauche(); }
          else if (event.key == 'w') {
            deplhaut(); }
            else if (event.key == 'd') {
              depldroite(); }
              else if (event.key == 's') {
                deplbas(); }
              }

              function depldroite() {
                if (x <= 280)
                {
                  xtmp = x;
                  ytmp = y;
                  clear();
                  x += 10;
                  y += 0;
                  display();
                }
                else
                {
                  xtmp = x;
                  ytmp = y;
                  clear();
                  x = -30;
                  y += 0;
                  display();
                }
              }

              function deplgauche() {
                if (x > -30)
                {
                  xtmp = x;
                  ytmp = y;
                  clear();
                  x -= 10;
                  y += 0;
                  display();
                }
                else
                {
                  xtmp = x;
                  ytmp = y;
                  clear();
                  x = 290;
                  y += 0;
                  display();
                }
              }

              function deplhaut() {
                if (y > 0)
                {
                  xtmp = x;
                  ytmp = y;
                  clear();
                  x += 0;
                  y -= 10;
                  display();
                }
              }

              function deplbas() {
                if (y <= 80)
                {
                  xtmp = x;
                  ytmp = y;
                  clear();
                  x += 0;
                  y += 10;
                  display();
                }
              }

              function display() {
                repanim = window.requestAnimationFrame(step);
                audio.play();
                ctx.beginPath();
                ctx.arc(240, 100, 20, 0, Math.PI*2, false);
                ctx.fillStyle = "green";
                ctx.fill();
                ctx.closePath();
              }

              function clear() {
                cancelAnimationFrame(repanim);
                ctx.clearRect(xtmp, ytmp, scaledWidth, scaledHeight);

                // ctx.clearRect(x, y, 93, 120);
              }
            }
          }

          // drawSquare(){
          //   let canvas = document.getElementById('square');
          //   let ctx = canvas.getContext("2d");
          //   ctx.fillStyle = "#D74022";
          //   ctx.fillRect(75, 75, 30, 10);
          // }
