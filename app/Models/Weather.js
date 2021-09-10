export class Weather{
  constructor(weatherData){
this.weather = weatherData.weather
// will need to do a helper template to iterate through (weather)
this.base = weatherData.base 
this.kelvin = weatherData.main.temp
this.f = Math.floor((this.kelvin -273.15)*1.8)+32
this.c = Math.floor(this.kelvin-273.15)
// will need a helper temp to iterate through all main temps...(main)
this.visibility = weatherData.visibility 
this.windSpeed = weatherData.wind.speed 
this.windDeg = weatherData.wind.deg 
this.rain = weatherData.rain 
this.clouds = weatherData.clouds
this.dt = weatherData.dt 
this.sys = weatherData.sys 
// will need helper temp to iterate through all main temps (sys)
this.timezone = weatherData.timezone
this.id = weatherData.id 
this.name = weatherData.name 
this.cod = weatherData.cod 
  }

  get Template(){
    return /*html*/ `
    <div class="card text-light px-2 py-3 text-center my-3">
    <h3 class="selectable visually-hidden" id="f" onclick="app.weatherController.toggleWeather()">Fahrenheit: ${this.f}&#8457;</h3>
    <h3 class="visually-hidden selectable" id="c" onclick="app.weatherController.toggleWeather()">Celsius: ${this.c}&#8451;</h3>
    <h5>${this.name} ${this.Weather}</h5>
    </div>
    `
  }

  get Weather(){
    let template = ''
    let elemWeather = this.weather
    elemWeather.forEach(w => template += `<span> - ${w.main}</span>`)
    return template

  }
}