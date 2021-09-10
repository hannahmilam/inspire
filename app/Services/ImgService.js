import { ProxyState } from "../AppState.js"
import { Img } from "../Models/Img.js"

// @ts-ignore
const imgApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/images'
})

class ImgService{
  async getImg(largeImgUrl) {
   let res = await imgApi.get(largeImgUrl)
   ProxyState.images = new Img(res.data)
  }

}

export const imgService = new ImgService()