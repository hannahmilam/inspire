export class Weather{
  constructor(weatherData){
this.weather = weatherData.weather
this.kelvin = weatherData.main.temp
this.f = Math.floor((this.kelvin -273.15)*1.8)+32
this.c = Math.floor(this.kelvin-273.15)
this.id = weatherData.id 
this.name = weatherData.name 
  }

  get Template(){
    return /*html*/ `
    <div class="card text-light px-2 py-3 my-3">
    <h5 class="selectable visually-hidden" id="f" onclick="app.weatherController.toggleWeather()">${this.f}&#8457;</h5>
    <h5 class="visually-hidden selectable" id="c" onclick="app.weatherController.toggleWeather()"> ${this.c}&#8451;</h5>
    <h5>${this.Weather}</h5>
    <h5>${this.name}, Idaho</h5>
    </div>
    `
  }

  get Weather(){
    let template = ''
    let elemWeather = this.weather
    elemWeather.forEach(w => template += `<span>${w.description} <img src="https://openweathermap.org/img/wn/${w.icon}.png" alt="weather icon"></span>`)
    return template

  }
}