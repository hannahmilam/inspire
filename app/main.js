import { ClockController } from "./Controllers/clockController.js";
import { ImgController } from "./Controllers/ImgController.js";
import { QuoteController } from "./Controllers/QuoteController.js";
import { WeatherController } from "./Controllers/WeatherController.js";


class App {
imgController = new ImgController()
weatherController = new WeatherController()
clockController = new ClockController()
quoteController = new QuoteController()
}

window["app"] = new App();
