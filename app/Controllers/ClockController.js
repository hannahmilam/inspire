import { ProxyState } from "../AppState.js";

  function _drawClock(){
    const today = new Date()
    let h = today.getHours()
    let m = today.getMinutes()
    // let s = today.getSeconds()
    document.getElementById('clock').innerHTML =  h + ":" + m;
    
    // grossly long ternary... BUT I FINALLY FIGURED IT OUT!!!!!!!!!! :D
    document.getElementById('greeting').innerHTML = today.getHours() >= 5 && today.getHours() <= 11 ? 'Good Morning' : today.getHours() >= 12 && today.getHours() <= 17 ? 'Good Afternoon' : today.getHours() >= 22 && today.getHours() <= 24 ? 'Good Evening' : 'Good Night'
  }

export class ClockController{

  constructor(){
    setInterval(_drawClock, 1000)
  }

  // REFERENCED AFTERNOON CHALLENGE TO UPDATE GREETING:
  // timeOfDayGreeting(hour) {
  //   if(hour>=5 && hour<=11){
  //       return "good morning"
  //   } if(hour>=12 && hour<=17){
  //       return "good afternoon"
  //   } if(hour>=18 && hour<=21){
  //       return "good evening"
  //   } if(hour>=22 && hour<=24){
  //      return "good night"
  //   }  if(hour>=1 && hour<=4) {
  //       return "good night"
  //   }
  //   }
}