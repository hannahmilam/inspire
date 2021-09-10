import { ProxyState } from "../AppState.js"
import { Todo } from "../Models/Todo.js"

// @ts-ignore
const todoApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/hannah/todos'
})

class TodoService{
  async getTodo(id) {
    let res = await todoApi.get(id)
    ProxyState.tasks = res.data.map(t => new Todo(t))
  }
}

export const todoService = new TodoService()