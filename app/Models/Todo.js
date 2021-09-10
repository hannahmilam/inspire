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
      <input type="checkbox" id="${this.id}" name="checkbox" onclick="app.todoController.markedComplete('${this.id}')">
      <label for="checkbox"> ${this.description}</label><br>
    </form>
    `
  }
}