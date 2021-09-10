import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Img.js').Img} */
  images = null

  /** @type {import('./Models/Weather.js').Weather} */
  weather = null

  /** @type {import('./Models/Quote.js').Quote} */
  quotes = null

   /** @type {import('./Models/Todo.js').Todo[]} */
   
   tasks = []

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
