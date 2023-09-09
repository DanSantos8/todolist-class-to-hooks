import { TodoItemProps } from "../../utils/types"
import * as S from "./styles"
import useTodoItem from "./useTodoItem"

export default function TodoItem(props: TodoItemProps) {
  const { completed, id, text } = props
  const { deleteItem, markCompleted } = useTodoItem()

  //TODO Highlight newly added item for several seconds.

  return (
    <S.TodoItem completed={completed}>
      <label>
        <div className="custom-checkbox">
          <input
            type="checkbox"
            defaultChecked={completed}
            onChange={() => markCompleted(id)}
          />
          <div className="checkmark"></div>
        </div>
        {text}
      </label>
      <S.Remove type="button" onClick={() => deleteItem(id)}>
        x
      </S.Remove>
    </S.TodoItem>
  )
}
