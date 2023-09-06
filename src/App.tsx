import { ChangeEvent, useReducer, useState } from "react"
import {
  IList,
  TodoItemProps,
  TodoListProps,
  initialState,
} from "./utils/types"
import { reducer } from "./reducer"

function TodoApp() {
  const [text, setText] = useState("")
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  const markItemCompleted = (itemId: number) => {
    dispatch({ type: "update_status_todo", payload: itemId })
  }

  const handleDeleteItem = (itemId: number) => {
    dispatch({ type: "remove_todo_item", payload: itemId })
  }

  const handleAddItem = (id: number) => {
    const newItem = {
      id: Date.now(),
      text: text,
      done: false,
    }

    dispatch({ type: "add_todo", payload: { item: newItem, listId: id } })
  }

  const handleAddList = () => {
    const newList = {
      id: Date.now(),
      name: text,
      todos: [],
    }
    dispatch({ type: "add_list_todos", payload: newList })
  }

  const openTodosList = (id: number) => {
    dispatch({ type: "set_active_list_todos", payload: id })
  }

  const backToListTodos = () => {
    dispatch({ type: "reset_active_list_todos" })
  }

  const handleSubmit = (id: number | undefined) => {
    setText("")
    if (id) {
      handleAddItem(id!)
    } else {
      handleAddList()
    }
  }

  const renderList = () => {
    return state.activeListTodos.id ? (
      <TodoList
        items={state.activeListTodos.todos}
        onItemCompleted={markItemCompleted}
        onDeleteItem={handleDeleteItem}
      />
    ) : (
      <List lists={state.lists} openTodosList={openTodosList} />
    )
  }
  return (
    <div>
      <h3 className="apptitle">TO DO LIST</h3>
      <button onClick={() => backToListTodos()}>Back to list</button>
      <div className="row">
        <div className="col-md-3">{renderList()}</div>
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
            type="button"
            className="btn btn-primary"
            onClick={() => handleSubmit(state.activeListTodos.id)}
            disabled={!text}
          >
            {"Add #"}
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

function List(props: { lists: IList[]; openTodosList: (id: number) => void }) {
  const { lists, openTodosList } = props
  return (
    <ul>
      {lists.map((list) => (
        <li>
          <button onClick={() => openTodosList(list.id)}>{list.name}</button>
        </li>
      ))}
    </ul>
  )
}

export default TodoApp
