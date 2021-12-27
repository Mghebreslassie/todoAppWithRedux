import React from "react"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as todoActions from "../state/actions/todoActions"

function Todo({ todo }) {
  const dispatch = useDispatch()
  const { deleteTodo } = bindActionCreators(todoActions, dispatch)

  return (
    <div>
      <h1>{todo.text}</h1>
      <button onClick={() => deleteTodo(todo)}>delete todo</button>
    </div>
  )
}

export default Todo
