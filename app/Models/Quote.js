export class Quote{
  constructor(quoteData){
    this.id = quoteData._id
    this.content = quoteData.content 
    this.author = quoteData.author
  }
  

  get Template(){
    return /*html*/`
    <div class="card ms-3 p-3 text-center">   
    <h3 
    onmouseover="app.quoteController.showAuthor()" onmouseout="app.quoteController.hideAuthor()">${this.content}</h3>
    <h5 class="visually-hidden" id="author">${this.author}</h5>
    </div>
    `
  }

}