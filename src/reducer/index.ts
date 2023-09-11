import { IList } from "../utils/types"
import { ActionsEnum } from "./enums"
import { Action, State } from "./types"

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionsEnum.ADD_LIST_TODOS:
      return { ...state, lists: [...state.lists, action.payload] }
    case ActionsEnum.SET_ACTIVE_LIST_TODOS: {
      return {
        ...state,
        activeListTodos: {
          id: action.payload,
          todos:
            state.lists.find((list) => list.id === action.payload)?.todos || [],
        },
      }
    }
    case ActionsEnum.ADD_TODO: {
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
    case ActionsEnum.RESET_ACTIVE_LIST_TODOS: {
      return {
        ...state,
        activeListTodos: {
          id: undefined,
          todos: [],
        },
      }
    }
    case ActionsEnum.UPDATE_STATUS_TODO: {
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
    case ActionsEnum.REMOVE_TODO_ITEM: {
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
    case ActionsEnum.EDIT_TODO_ITEM: {
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
    case ActionsEnum.DELETE_TODOS: {
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
    case ActionsEnum.TOGGLE_EDIT: {
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
    case ActionsEnum.REMOVE_TODOS_LIST: {
      const updatedList = state.controls.currentList.filter(
        (list) => list.id !== action.payload
      )

      return {
        ...state,
        controls: {
          ...state.controls,
          currentList: updatedList,
        },
      }
    }
    case ActionsEnum.EDIT_LIST_TODOS: {
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
    case ActionsEnum.RESTORE_STATE: {
      return { ...action.payload }
    }

    default:
      return state
  }
}
