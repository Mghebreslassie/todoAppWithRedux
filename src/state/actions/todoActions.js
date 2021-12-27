import * as todoConstants from "./todoConstants"

export const addTodo = (todo) => {
  return (dispatch) => {
    fetch("http://localhost:3000/add", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(todo),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: todoConstants.ADD_TODO,
          payload: todo,
        })
      })
  }
}

export const deleteTodo = (todo) => {
  return (dispatch) => {
    fetch("http://localhost:3000/deleteTodo/" + todo._id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: todoConstants.DELETE_TODO,
          payload: data,
        })
      })
  }
}

export const fetchTodos = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: todoConstants.FETCH_TODOS,
          payload: data,
        })
      })
  }
}
