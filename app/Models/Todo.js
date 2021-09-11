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
      <input type="checkbox" id="${this.id}" name="checkbox" 
     ${this.completed ? 'checked' : ''} onclick="app.todoController.markedComplete('${this.id}')">
      <label for="checkbox"> 
   
      ${this.description} 
      <i class="fas fa-minus selectable" onclick="app.todoController.deleteTask('${this.id}')"></i>
  
      </label><br>
    </form>
    `
  }
}