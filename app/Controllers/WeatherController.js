import { ProxyState } from "../AppState.js"
import { weatherService } from "../Services/WeatherService.js"

function _drawWeather(){
  document.getElementById('weather').innerHTML = ProxyState.weather.Template
  document.getElementById('f').classList.remove('visually-hidden')
}

export class WeatherController{
  constructor(){
    ProxyState.on('weather', _drawWeather)
    this.getWeather()
  }

  async getWeather(){
    try {
      await weatherService.getWeather()
    } catch (error) {
      console.log('⚠ GET_WEATHER', error)
    }
  }

  toggleWeather(){
    document.getElementById('c').classList.toggle('visually-hidden')
    document.getElementById('f').classList.toggle('visually-hidden')
  }
}