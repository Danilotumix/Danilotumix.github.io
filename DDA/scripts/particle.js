export class Particle {
  constructor(v, r, m, alpha){
    this.x = 0;
    this.y = 0;
    this.vx = v*Math.cos(alpha*Math.PI/180);
    this.vy = v*Math.sin(alpha*Math.PI/180);
    this.ax = 0;
    this.ay = 0;
    this.m = m;
    this.A = Math.PI*r*r;
  }
  
  get_data(){
    var v = Math.sqrt(this.vx*this.vx + this.vy*this.vy);
    var a = Math.sqrt(this.ax*this.ax + this.ay*this.ay);
    
    return [this.x, this.y, v, this.vx, this.vy, a, this.ax, this.ay];
  }
  
  process_tick(delta_t, ro, cd, g, callback){
    var v = Math.sqrt(this.vx*this.vx + this.vy*this.vy);
    
    var k = (ro*this.A*cd)/2;
    
    this.ax = -(k/this.m)*v*this.vx;
    this.ay = -(g + (k/this.m)*v*this.vy);
    
    this.x = this.x + this.vx*delta_t + (this.ax/2)*delta_t*delta_t;
    this.vx = this.vx + this.ax*delta_t;
    
    this.y = this.y + this.vy*delta_t + (this.ay/2)*delta_t*delta_t;
    this.vy = this.vy + this.ay*delta_t;
    
    if(typeof(callback) != "undefined"){
      return callback();
    }
  }
}