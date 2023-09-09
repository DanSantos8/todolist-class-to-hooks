export interface TodoListItem {
  id: number
  text: string
  done: boolean
}

export interface IList {
  id: number
  name: string
  emoji: string
  todos: TodoListItem[]
}
