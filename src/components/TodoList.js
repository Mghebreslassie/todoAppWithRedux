import React, { useEffect } from "react"
import Todo from "./Todo"
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as todoActions from "../state/actions/todoActions"

function TodoList() {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()
  const { fetchTodos } = bindActionCreators(todoActions, dispatch)

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <div>
      {todos
        ? todos.map((todo) => {
            return <Todo todo={todo} />
          })
        : ""}
    </div>
  )
}

export default TodoList
