import { TodoListProps } from "../../utils/types"
import TodoItem from "../TodoItem"

export default function TodoList(props: TodoListProps) {
  const { items, onDeleteItem, onItemCompleted } = props

  return (
    <ul className="todolist">
      {items.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          text={item.text}
          completed={item.done}
          onItemCompleted={onItemCompleted}
          onDeleteItem={onDeleteItem}
        />
      ))}
    </ul>
  )
}
