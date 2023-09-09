export interface TodoItemProps {
  id: number
  text: string
  completed: boolean
  isMultipleDeleteActive: boolean
  todosListToDelete: number[]
  handleTodosListToDelete: (itemId: number) => void
}
