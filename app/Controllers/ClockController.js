export class ClockController{
  constructor(){
    setInterval(this._drawClock, 1000)
    setInterval(this._drawTwelveHourClock, 1000)
  }
   _drawClock(){
    const today = new Date()
    let h = today.getHours()
    let m = (today.getMinutes() < 10? '0' : '') + today.getMinutes();
    let s = today.getSeconds()
    
    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;


    // grossly long ternary... BUT I FINALLY FIGURED IT OUT!!!!!!!!!! :D
    document.getElementById('greeting').innerHTML = today.getHours() >= 5 && today.getHours() <= 11 ? 'Good Morning' : today.getHours() >= 12 && today.getHours() <= 17 ? 'Good Afternoon' : today.getHours() >= 22 && today.getHours() <= 24 ? 'Good Evening' : 'Good Night'
  }

   _drawTwelveHourClock(){
    const today = new Date()
    let h = today.getHours()
    let m = (today.getMinutes() < 10? '0' : '') + today.getMinutes();
    let AmOrPm = h >= 12 ? 'PM' : 'AM';
    h = (h % 12) || 12;
    document.getElementById('twelve-hour-clock').innerHTML = h + ":" + m + " " + AmOrPm;
  }  

  toggleClocks(){
      document.getElementById('clock').classList.toggle('visually-hidden')
      document.getElementById('twelve-hour-clock').classList.toggle('visually-hidden')
  }
}
