import { Action, IList, State } from "../utils/types"

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "add_list_todos":
      return { ...state, lists: [...state.lists, action.payload] }
    case "remove_list_todos":
      return {
        ...state,
        lists: [],
      }
    case "set_active_list_todos": {
      return {
        ...state,
        activeListTodos: {
          id: action.payload,
          todos:
            state.lists.find((list) => list.id === action.payload)?.todos || [],
        },
      }
    }
    case "add_todo": {
      const todos = state.lists.map((list) => {
        if (list.id === action.payload.listId)
          return {
            ...list,
            todos: [...list.todos, action.payload.item],
          }

        return list
      })

      return {
        ...state,
        lists: todos,
        activeListTodos: {
          id: state.activeListTodos.id,
          todos: [...state.activeListTodos.todos, action.payload.item],
        },
      }
    }
    case "reset_active_list_todos": {
      return {
        ...state,
        activeListTodos: {
          id: undefined,
          todos: [],
        },
      }
    }
    case "update_status_todo": {
      const todosList = state.lists.map((list) => {
        if (list.id === state.activeListTodos.id)
          return {
            ...list,
            todos: list.todos.map((todo) => {
              if (todo.id === action.payload) {
                return {
                  ...todo,
                  done: !todo.done,
                }
              }

              return todo
            }),
          }

        return list
      })

      const activeTodosList = state.activeListTodos.todos.map((todo) => {
        if (todo.id === action.payload) {
          return {
            id: todo.id,
            text: todo.text,
            done: !todo.done,
          }
        }
        return todo
      })

      return {
        ...state,
        lists: todosList,
        activeListTodos: {
          ...state.activeListTodos,
          todos: activeTodosList,
        },
      }
    }
    case "remove_todo_item": {
      const todosList = state.lists.map((list) => {
        if (list.id === state.activeListTodos.id) {
          return {
            ...list,
            todos: list.todos.filter((todo) => todo.id !== action.payload),
          }
        }

        return list
      })

      const activeListTodos = state.activeListTodos.todos.filter(
        (todo) => todo.id !== action.payload
      )

      return {
        ...state,
        lists: todosList,
        activeListTodos: {
          ...state.activeListTodos,
          todos: activeListTodos,
        },
      }
    }
    case "edit_todo_item": {
      const currentList = state.activeListTodos
      const updatedTodos = state.activeListTodos.todos.map((todo) => {
        if (todo.id === action.payload.itemId) {
          return { ...todo, text: action.payload.text }
        }

        return todo
      })

      const updatedLists = state.lists.map((list) => {
        if (list.id === currentList.id) {
          return {
            ...list,
            todos: updatedTodos,
          }
        }

        return list
      })

      return {
        ...state,
        lists: updatedLists,
        activeListTodos: {
          ...currentList,
          todos: updatedTodos,
        },
      }
    }
    case "delete_todos": {
      const currentList = state.activeListTodos
      const updatedTodos = state.activeListTodos.todos.filter(
        (todo) => !action.payload.includes(todo.id)
      )

      const updatedLists = state.lists.map((list) => {
        if (list.id === currentList.id) {
          return {
            ...list,
            todos: updatedTodos,
          }
        }

        return list
      })

      return {
        ...state,
        lists: updatedLists,
        activeListTodos: {
          ...currentList,
          todos: updatedTodos,
        },
      }
      return state
    }
    case "toggle_edit": {
      const currentList = state.activeListTodos.id
        ? state.activeListTodos.todos
        : state.lists

      return {
        ...state,
        controls: {
          isEditing: action.payload,
          currentList: currentList as IList[],
        },
      }
    }
    case "remove_list_todo": {
      const updatedList = state.controls.currentList.filter(
        (list) => list.id !== action.payload
      ) as IList[]

      return {
        ...state,
        controls: {
          ...state.controls,
          currentList: updatedList,
        },
      }
    }
    case "edit_list_todos": {
      const newListsNames = action.payload

      const updatedLists = state.controls.currentList.map((list) => {
        return {
          id: list.id,
          emoji: list.emoji,
          name: newListsNames[list.id],
          todos: list.todos,
        }
      })

      return {
        ...state,
        lists: updatedLists,
      }
    }

    default:
      return state
  }
}
