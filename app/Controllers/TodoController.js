import { ProxyState } from "../AppState.js"
import { todoService } from "../Services/TodoService.js"

function _drawTodo(){
  let template = ""
 ProxyState.tasks.forEach(t => template += t.Template)
  document.getElementById('todo').innerHTML = template
}

export class TodoController{ 
  
  constructor(){
ProxyState.on('tasks', _drawTodo)
this.getTodo()
  }

  async getTodo(){
    try {
      await todoService.getTodo()
    } catch (error) {
      console.log('⚠ GET_TODO', error)
    }
  }

  async markedComplete(id){
    try {
      await todoService.markedComplete(id)
    } catch (error) {
      console.log('⚠ MARKED_COMPLETE', error)
      
    }
  }
}