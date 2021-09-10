export class Todo{
  constructor(todoData){
    this.completed = todoData.completed
    this.id = todoData._id
    this.description = todoData.description 
    this.user = todoData.user
    this.id = todoData.id 
    this.value = todoData._v
  }

  get Template(){
    return /*html*/ `
    <form>
      <input type="checkbox" id="${this.id}" name="${this.id}" value="${this.completed}">
      <label for="${this.id}"> ${this.description}</label><br>
    </form>
    `
  }
}