import { IList, TodoListItem } from "../utils/types"
import { ActionsEnum } from "./enums"

export type Action =
  | { type: ActionsEnum.ADD_LIST_TODOS; payload: IList }
  | { type: ActionsEnum.SET_ACTIVE_LIST_TODOS; payload: number | undefined }
  | {
      type: ActionsEnum.ADD_TODO
      payload: { item: TodoListItem; listId: number }
    }
  | { type: ActionsEnum.RESET_ACTIVE_LIST_TODOS }
  | { type: ActionsEnum.UPDATE_STATUS_TODO; payload: number }
  | { type: ActionsEnum.REMOVE_TODO_ITEM; payload: number }
  | { type: ActionsEnum.EDIT_LIST_TODOS; payload: { [key: number]: string } }
  | { type: ActionsEnum.TOGGLE_EDIT; payload: boolean }
  | { type: ActionsEnum.REMOVE_TODOS_LIST; payload: number }
  | {
      type: ActionsEnum.EDIT_TODO_ITEM
      payload: { itemId: number; text: string }
    }
  | { type: ActionsEnum.DELETE_TODOS; payload: number[] }
  | { type: "restore_state"; payload: State }

export interface State {
  controls: {
    isEditing: boolean
    currentList: IList[]
  }
  lists: IList[]
  activeListTodos: {
    id: number | undefined
    todos: TodoListItem[]
  }
}

export const initialState: State = {
  controls: {
    isEditing: false,
    currentList: [],
  },
  lists: [],
  activeListTodos: {
    id: undefined,
    todos: [],
  },
}
