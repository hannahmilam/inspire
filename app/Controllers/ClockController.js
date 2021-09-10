import { ProxyState } from "../AppState.js";

  function _drawClock(){
    const today = new Date()
    let h = today.getHours()
    let m = today.getMinutes()
    // let s = today.getSeconds()
    document.getElementById('clock').innerHTML =  h + ":" + m;
  }

export class ClockController{

  constructor(){
    setInterval(_drawClock, 1000)
  }
}