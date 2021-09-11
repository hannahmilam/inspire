import { ProxyState } from "../AppState.js";

  function _drawClock(){
    const today = new Date()
    let h = today.getHours()
    let m = (today.getMinutes() < 10? '0' : '') + today.getMinutes();
    let s = today.getSeconds()
    
    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;


    // grossly long ternary... BUT I FINALLY FIGURED IT OUT!!!!!!!!!! :D
    document.getElementById('greeting').innerHTML = today.getHours() >= 5 && today.getHours() <= 11 ? 'Good Morning' : today.getHours() >= 12 && today.getHours() <= 17 ? 'Good Afternoon' : today.getHours() >= 22 && today.getHours() <= 24 ? 'Good Evening' : 'Good Night'
  }

  function _drawTwelveHourClock(){
    const today = new Date()
    let h = today.getHours()
    let m = (today.getMinutes() < 10? '0' : '') + today.getMinutes();
    let AmOrPm = h >= 12 ? 'PM' : 'AM';
    h = (h % 12) || 12;
    document.getElementById('twelve-hour-clock').innerHTML = h + ":" + m + " " + AmOrPm;
  }  
  
export class ClockController{

  constructor(){
    setInterval(_drawClock, 1000)
    setInterval(_drawTwelveHourClock, 1000)
  }

  toggleClocks(){
      document.getElementById('clock').classList.toggle('visually-hidden')
      document.getElementById('twelve-hour-clock').classList.toggle('visually-hidden')
  }
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
