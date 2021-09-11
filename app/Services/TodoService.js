import { ProxyState } from "../AppState.js"
import { Todo } from "../Models/Todo.js"

// @ts-ignore
const todoApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/hannah/todos'
})

class TodoService{
  constructor(){
    this.getTodo()
  }
  async getTodo() {
    let res = await todoApi.get()
    ProxyState.tasks = res.data.map(t => new Todo(t))
  }
  async addTask(todoData) {
    let res = await todoApi.post('', todoData)
    ProxyState.tasks = [...ProxyState.tasks, new Todo(res.data)]
  }
  async deleteTask(id) {
    await todoApi.delete(id)
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id !== id)
  }
  async markedComplete(id) {
    const task = ProxyState.tasks.find(t => t.id === id)
    task.completed = !task.completed
    await todoApi.put(`${id}`, task)
    this.getTodo()
  }
}

export const todoService = new TodoService()