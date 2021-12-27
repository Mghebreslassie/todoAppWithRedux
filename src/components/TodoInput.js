import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as todoActions from "../state/actions/todoActions"

function TodoInput() {
  const [value, setValue] = useState("")
  const [check, setCheck] = useState(false)
  const dispatch = useDispatch()
  const { addTodo } = bindActionCreators(todoActions, dispatch)
  return (
    <div>
      <div>
        <label name="todo-text">todo:</label>
        <input
          id="todo-text"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div>
        <label name="todo-completed">completed:</label>
        <input
          id="todo-completed"
          type="checkbox"
          value={check}
          onChange={() => setCheck(!check)}
        />
      </div>
      <button onClick={() => addTodo({ text: value, complete: check })}>
        Add todo
      </button>
    </div>
  )
}

export default TodoInput
