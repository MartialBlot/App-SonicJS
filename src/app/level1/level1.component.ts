import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-level1',
  templateUrl: './level1.component.html',
  styleUrls: ['./level1.component.css']
})
export class Level1Component implements OnInit {

  constructor() { }

  ngOnInit() {
    this.drawSquare();
    this.drawBackground();
  }

  drawBackground() {
    let canvas = document.getElementById('stage');
    let ctx = canvas.getContext("2d");
    let img = new Image();
    img.onload = function(){
      ctx.drawImage(img, 0, 0, 1200, 800)
    }
    img.src = '../../assets/images/fond.png';
  }

  drawSquare(){
    let canvas = document.getElementById('square');
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "#D74022";
    ctx.fillRect(75, 75, 30, 10);
  }
}
