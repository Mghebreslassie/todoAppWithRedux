import * as todoConstants from "../actions/todoConstants"

const initialState = []

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case todoConstants.FETCH_TODOS:
      return action.payload
    case todoConstants.ADD_TODO:
      return [...state, action.payload]
    case todoConstants.DELETE_TODO:
      return state.filter((todo) => {
        return todo._id !== action.payload._id
      })
    default:
      return state
  }
}

export default todoReducer
