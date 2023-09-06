export interface TodoListItemProps {
  id: Date
  text: string
  done: boolean
  onItemCompleted: () => void
  onDeleteItem: () => void
}

export interface TodoListProps {
  items: TodoListItemProps[]
}
