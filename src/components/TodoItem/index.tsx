import { TodoItemProps } from "../../utils/types"
import * as S from "./styles"
import useTodoItem from "./useTodoItem"

export default function TodoItem(props: TodoItemProps) {
  const { completed, id, text } = props
  const { deleteItem, markCompleted } = useTodoItem()

  const itemClass = "form-check todoitem " + (completed ? "done" : "undone")

  //TODO Highlight newly added item for several seconds.

  return (
    <S.TodoItem className={itemClass}>
      <label>
        <input
          type="checkbox"
          defaultChecked={completed}
          onChange={() => markCompleted(id)}
        />
        {text}
      </label>
      <button type="button" onClick={() => deleteItem(id)}>
        x
      </button>
    </S.TodoItem>
  )
}
