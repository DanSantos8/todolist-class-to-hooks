import { TodoListProps } from "../../utils/types"
import TodoItem from "../TodoItem"
import * as S from "./styles"
export default function TodoList(props: TodoListProps) {
  const { items, onDeleteItem, onItemCompleted } = props

  return (
    <S.Container>
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
    </S.Container>
  )
}
