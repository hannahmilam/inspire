import { ProxyState } from "../AppState.js"
import { Weather } from "../Models/Weather.js"

// @ts-ignore
const weatherApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/weather'
})

class WeatherService{
  async getWeather() {
    let res = await weatherApi.get('')
    console.log('weather', res.data)
    ProxyState.weather = new Weather(res.data)
  }

}

export const weatherService = new WeatherService()