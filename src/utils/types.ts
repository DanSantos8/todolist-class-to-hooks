export interface TodoListItem {
  id: number
  text: string
  done: boolean
}

export interface TodoItemProps {
  id: number
  text: string
  completed: boolean
  onItemCompleted: (itemId: number) => void
  onDeleteItem: (itemId: number) => void
}

export interface TodoListProps {
  items: TodoListItem[]
  onItemCompleted: (itemId: number) => void
  onDeleteItem: (itemId: number) => void
}
