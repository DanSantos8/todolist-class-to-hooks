export interface TodoListProps {
  items: {
    id: Date
    text: string
    done: boolean
    onItemCompleted: () => void
    onDeleteItem: () => void
  }[]
}
