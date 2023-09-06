import { TodoItemProps } from "../../utils/types"

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
    <li className={itemClass}>
      <label className="form-check-label">
        <input
          type="checkbox"
          className="form-check-input"
          defaultChecked={completed}
          onChange={markCompleted}
        />
        {text}
      </label>
      <button
        type="button"
        className="btn btn-danger btn-sm"
        onClick={deleteItem}
      >
        x
      </button>
    </li>
  )
}
