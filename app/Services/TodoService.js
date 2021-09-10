import { ProxyState } from "../AppState.js"
import { Todo } from "../Models/Todo.js"

// @ts-ignore
const todoApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/hannah/todos'
})

class TodoService{
  async markedComplete(id) {
    const task = ProxyState.tasks.find(t => t.id == id)
    task.completed = !task.completed
    await todoApi.put(`${id}`, task)
    console.log('from markedComplete', task.completed)
  }
  async getTodo(id) {
    let res = await todoApi.get(id)
    ProxyState.tasks = res.data.map(t => new Todo(t))
  }
}

export const todoService = new TodoService()