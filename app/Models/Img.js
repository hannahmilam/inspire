export class Img{
constructor(imgData){
// this.url = imgData.url  
// this.imgUrl = imgData.imgUrl 
// (probably don't need these urls... they are just smaller images... but keeping them here in case)
this.largeImgUrl = imgData.largeImgUrl
this.tags = imgData.tags 
this.author = imgData.author 
this.query = imgData.query
}

get Template(){
  return /*html*/ `
  <h5>Author: ${this.author}</h5>
  <p>Title: ${this.query}</p>
  `
}
}