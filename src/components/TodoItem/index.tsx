import { TodoItemProps } from "../../utils/types"
import * as S from "./styles"

export default function TodoItem(props: TodoItemProps) {
  const { onDeleteItem, completed, id, onItemCompleted, text } = props
  const markCompleted = () => {
    onItemCompleted(id)
  }

  const deleteItem = () => {
    onDeleteItem(id)
  }

  const itemClass = "form-check todoitem " + (completed ? "done" : "undone")

  //TODO Highlight newly added item for several seconds.

  return (
    <S.TodoItem className={itemClass}>
      <label>
        <input
          type="checkbox"
          defaultChecked={completed}
          onChange={markCompleted}
        />
        {text}
      </label>
      <button type="button" onClick={deleteItem}>
        x
      </button>
    </S.TodoItem>
  )
}
