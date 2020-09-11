import { Simulation } from './simulation.js'

var canvas = document.getElementById("myCanvas");
var simulation = new Simulation(canvas, 120);

window.inputButton = function inputButton(){
  var v = parseFloat(document.getElementById("v_input").value);
  var r = parseFloat(document.getElementById("r_input").value)/100;
  var m = parseFloat(document.getElementById("m_input").value);
  var alpha = parseFloat(document.getElementById("alpha_input").value);
  
  /*
  v = 50;
  r = 0.2;
  m = 0.15
  alpha = 20;
  */
  
  if(isNaN(v) || isNaN(r) || isNaN(m) || isNaN(alpha)){
    alert("Falta ingresar datos");
    return;
  }
  else if(v < 50 || v > 80){
    alert("Valor de velocidad inválido");
    return;
  }
  else if(r < 0.1 || r > 0.3){
    alert("Valor de radio inválido");
    return;
  }
  else if(m < 0.140 || m > 0.350){
    alert("Valor de masa inválido");
    return;
  }
  else if(alpha < 20 || alpha > 70){
    alert("Valor de ángulo inválido");
    return;
  }
  
  simulation.init_particle(v, r, m, alpha);
  simulation.start();
}