import { ProxyState } from "../AppState.js"
import { Quote } from "../Models/Quote.js"

// @ts-ignore
const quoteApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/quotes'
})

class QuoteService{
  async getQuote(id){
    let res = await quoteApi.get(id)
    ProxyState.quotes = new Quote(res.data)
  } 
}

export const quoteService = new QuoteService()