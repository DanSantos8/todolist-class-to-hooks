export interface TodoListItem {
  id: number
  text: string
  done: boolean
}

export interface TodoItemProps {
  id: number
  text: string
  completed: boolean
}

export interface TodoListProps {
  items: TodoListItem[]
}

export interface IList {
  id: number
  name: string
  emoji: string
  todos: TodoListItem[]
}

export interface ListItemProps {
  id: number
  name: string
  emoji: string
  todosQuantity: number
}

export type Action =
  | { type: "add_list_todos"; payload: IList }
  | { type: "remove_list_todos"; payload: number }
  | { type: "set_active_list_todos"; payload: number | undefined }
  | { type: "add_todo"; payload: { item: TodoListItem; listId: number } }
  | { type: "reset_active_list_todos" }
  | { type: "update_status_todo"; payload: number }
  | { type: "remove_todo_item"; payload: number }
  | { type: "edit_list_todos"; payload: IList }
  | { type: "toggle_edit"; payload: boolean }

export interface State {
  controls: {
    isEditing: boolean
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
  },
  lists: [],
  activeListTodos: {
    id: undefined,
    todos: [],
  },
}
