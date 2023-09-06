import { ChangeEvent, useState } from "react"
import { TodoItemProps, TodoListItem, TodoListProps } from "./utils/types"

function TodoApp() {
  const [items, setItems] = useState<TodoListItem[]>([])
  const [text, setText] = useState("")

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }
  const handleAddItem = () => {
    const newItem = {
      id: Date.now(),
      text: text,
      done: false,
    }

    setItems((state) => [...state, newItem])
  }

  const markItemCompleted = (itemId: number) => {
    const updatedItems = items.map((item) => {
      if (itemId === item.id) item.done = !item.done

      return item
    })

    setItems(updatedItems)
  }

  const handleDeleteItem = (itemId: number) => {
    const updatedItems = items.filter((item) => {
      return item.id !== itemId
    })

    setItems(updatedItems)
  }
  return (
    <div>
      <h3 className="apptitle">TO DO LIST</h3>
      <div className="row">
        <div className="col-md-3">
          <TodoList
            items={items}
            onItemCompleted={markItemCompleted}
            onDeleteItem={handleDeleteItem}
          />
        </div>
      </div>
      <form className="row">
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            onChange={handleTextChange}
            value={text}
          />
        </div>
        <div className="col-md-3">
          <button
            className="btn btn-primary"
            onClick={handleAddItem}
            disabled={!text}
          >
            {"Add #" + (items.length + 1)}
          </button>
        </div>
      </form>
    </div>
  )
}

function TodoItem(props: TodoItemProps) {
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

function TodoList(props: TodoListProps) {
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

export default TodoApp
