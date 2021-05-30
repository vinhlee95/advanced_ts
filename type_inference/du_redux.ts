/**
 * Discriminate union example in Redux
 * 
 */

// 
// ------------Action and types-------------------
// 
interface Action {
  type: string
}

/**
 * Add action type
 * Payload is a text string that we want to append to the state
 * 
 */
class AddAction implements Action {
  readonly type = "Add"

  constructor(public payload: string) {}
}

/**
 * Remove action type
 * Payload is the id of the element that we want to remove from the state
 * 
 */
class RemoveAction implements Action {
  readonly type = "Remove"

  constructor(public payload: number) {}
}

type Actions= AddAction | RemoveAction

// 
// -------------Reducer----------------
// 
interface State {
  todos: string[]
}

const reducer = (action: Actions, state: State): State => {
  switch(action.type) {
    case "Add":
      // Payload has "string" type here
      return {...state, todos: [...state.todos, action.payload]}
    case "Remove":
      // Payload has "number" type here
      return {
        ...state,
        todos: state.todos.slice().splice(action.payload, 1)
      }
    default:
      const exhaustiveCheck: never = action
      return exhaustiveCheck
  }
}