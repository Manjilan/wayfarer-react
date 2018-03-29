import axios from 'axios'

class WayfarerModel {
  static all(){
    let request = axios.get("http://localhost:3001/all")
    return request
  }
//   static create(todo) {
//   let request = axios.post("https://super-crud.herokuapp.com/api/todos", todo)
//   return request
// }
// static delete(todo){
//   let request = axios.delete(`https://super-crud.herokuapp.com/api/todos/${todo._id}`)
//   return request
// }
// static update(todoId, todoBody) {
//     let request = axios.put(`https://super-crud.herokuapp.com/api/todos/${todoId}`, {
//         body: todoBody
//     })
//     return request
// }
}

export default WayfarerModel
