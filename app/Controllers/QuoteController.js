import { ProxyState } from "../AppState.js";
import { quoteService } from "../Services/QuoteService.js";

function _drawQuote(){
  document.getElementById('quotes').innerHTML = ProxyState.quotes.Template
}

export class QuoteController{
  constructor(){
    ProxyState.on('quotes', _drawQuote)
    this.getQuote()
  }

  async getQuote(){
    try {
      await quoteService.getQuote()
    } catch (error) {
      console.log('⚠ GET_QUOTE', error)
    }
  }

  showAuthor(){
    document.getElementById('author').classList.remove('visually-hidden')
  }

  hideAuthor(){
    document.getElementById('author').classList.add('visually-hidden')
  }
}