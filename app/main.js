import { ClockController } from "./Controllers/ClockController.js";
import { ImgController } from "./Controllers/ImgController.js";
import { QuoteController } from "./Controllers/QuoteController.js";
import { TodoController } from "./Controllers/TodoController.js";
import { WeatherController } from "./Controllers/WeatherController.js";


class App {
imgController = new ImgController()
weatherController = new WeatherController()
clockController = new ClockController()
quoteController = new QuoteController()
todoController = new TodoController()
}

window["app"] = new App();
