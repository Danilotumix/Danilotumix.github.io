import { Particle } from './particle.js'

export class Simulation {
  constructor(canvas, max_fps){
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.particle = 0;
    this.isRunning = false;
    
    this.time_delta = 0;
    this.frame_time = 1/max_fps;
    this.last_time = -1;
    
    this.animID = 0;
  }
  
  init_particle(v, r, m, alpha){
    this.particle = new Particle(v, r, m, alpha);
  }
  
  start(){
    if(this.animID == 0){
      this.context.beginPath();
      this.context.moveTo(0, this.canvas.height);
      this.last_time = (new Date()).getTime();
      this.time_delta = 0;
      this.animID = window.requestAnimationFrame(() => this.loop());
    }
  }
  
  stop(){
    if(this.animID != 0){
      console.log("OOF");
      window.cancelAnimationFrame(this.animID);
      this.animID = 0;
      this.context.closePath();
    }
  }
  
  loop(){
    if(this.particle == 0){
      return;
    }
    
    this.animID = window.requestAnimationFrame(() => this.loop());
    
    var current_time = (new Date()).getTime();
    this.time_delta += (current_time - this.last_time)/1000;
    
    while(this.time_delta > this.frame_time){
      this.time_delta -= this.frame_time;
      var data = this.particle.process_tick(this.frame_time, 1.2, 0.5, 9.80665, () => this.particle.get_data());
      this.draw(data);
      
      if(data[1] < 0){
        this.stop();
        break;
      }
    }
    
    this.last_time = current_time;
  }
  
  draw(data){
    var re_x = data[0]*75;
    var re_y = this.canvas.height - data[1]*75;
    
    this.context.lineTo(re_x,re_y);
    this.context.imageSmoothingEnabled = true;
    this.context.strokeStyle = "#df4b26";
    this.context.lineWidth = 3;
    this.context.stroke();
    this.context.moveTo(re_x,re_y);
  }
}