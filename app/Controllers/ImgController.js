import { ProxyState } from "../AppState.js"
import { imgService } from "../Services/ImgService.js"


function _drawImg(){
  document.getElementById('img').style.backgroundImage = `url(${ProxyState.images.largeImgUrl})`
  document.getElementById('img-text').innerHTML = ProxyState.images.Template
}
export class ImgController{
  constructor(){
   ProxyState.on('images', _drawImg)
   imgService.getImg()
  }

  async getImg(){
    try {
      await imgService.getImg()
    } catch (error) {
      console.log('⚠ GET_IMG', error)
    }
  }
}