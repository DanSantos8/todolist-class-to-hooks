import React from "react"
import * as ReactDOM from "react-dom"
import { TodoListItemProps, TodoListProps } from "./utils/types"

class TodoApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [],
      text: "",
    }

    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleAddItem = this.handleAddItem.bind(this)
    this.markItemCompleted = this.markItemCompleted.bind(this)
    this.handleDeleteItem = this.handleDeleteItem.bind(this)
  }
  handleTextChange(event) {
    this.setState({
      text: event.target.value,
    })
  }
  handleAddItem(event) {
    event.preventDefault()

    const newItem = {
      id: Date.now(),
      text: this.state.text,
      done: false,
    }

    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      text: "",
    }))
  }
  markItemCompleted(itemId) {
    const updatedItems = this.state.items.map((item) => {
      if (itemId === item.id) item.done = !item.done

      return item
    })

    // State Updates are Merged
    this.setState({
      items: [].concat(updatedItems),
    })
  }
  handleDeleteItem(itemId) {
    const updatedItems = this.state.items.filter((item) => {
      return item.id !== itemId
    })

    this.setState({
      items: [].concat(updatedItems),
    })
  }
  render() {
    return (
      <div>
        <h3 className="apptitle">TO DO LIST</h3>
        <div className="row">
          <div className="col-md-3">
            <TodoList
              items={this.state.items}
              onItemCompleted={this.markItemCompleted}
              onDeleteItem={this.handleDeleteItem}
            />
          </div>
        </div>
        <form className="row">
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              onChange={this.handleTextChange}
              value={this.state.text}
            />
          </div>
          <div className="col-md-3">
            <button
              className="btn btn-primary"
              onClick={this.handleAddItem}
              disabled={!this.state.text}
            >
              {"Add #" + (this.state.items.length + 1)}
            </button>
          </div>
        </form>
      </div>
    )
  }
}

function TodoItem(props: TodoListItemProps) {
  const { onDeleteItem, done, id, onItemCompleted, text } = props
  const markCompleted = () => {
    onItemCompleted(id)
  }

  const deleteItem = () => {
    onDeleteItem(id)
  }

  const itemClass = "form-check todoitem " + (done ? "done" : "undone")

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
  const { items } = props

  return (
    <ul className="todolist">
      {items.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          text={item.text}
          completed={item.done}
          onItemCompleted={item.onItemCompleted}
          onDeleteItem={item.onDeleteItem}
        />
      ))}
    </ul>
  )
}

export default TodoApp
