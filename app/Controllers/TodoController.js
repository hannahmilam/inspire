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

  async addTask(){
    event.preventDefault()
    /**
     * @type {HTMLFormElement}
     */
    // @ts-ignore
    const form = event.target
    // TODO get data from form

    const todoData = {
      description: form.description.value
    }

    try {
      await todoService.addTask(todoData)
    } catch (error) {
      console.log('⚠ ADD_TASK', error)
    }
    form.reset()
  }

  async deleteTask(id){
    try {
    // @ts-ignore
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        // @ts-ignore
        Swal.fire(
          'Deleted!',
          'Your task has been deleted.',
          'success'
        )
        await todoService.deleteTask(id)
      }
    })
  } catch (error) {
    console.log('⚠ DELETE_TASK', error)
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