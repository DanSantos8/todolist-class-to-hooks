import { ChangeEvent, useReducer, useState } from "react"
import { reducer } from "../../reducer"
import { initialState } from "../../utils/types"
import TodoList from "../TodoList"
import ListTodosList from "../ListTodosList"
import * as S from "./styles"

export default function Todo() {
  const [text, setText] = useState("")
  const [state, dispatch] = useReducer(reducer, initialState)

  const isTodoList = !!state.activeListTodos.id

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
    return isTodoList ? (
      <TodoList
        items={state.activeListTodos.todos}
        onItemCompleted={markItemCompleted}
        onDeleteItem={handleDeleteItem}
      />
    ) : (
      <ListTodosList lists={state.lists} openTodosList={openTodosList} />
    )
  }
  return (
    <S.Layout>
      <S.Container>
        <S.Title>TO DO LIST</S.Title>
        {isTodoList && (
          <S.BackToListButton onClick={() => backToListTodos()}>
            Back to list
          </S.BackToListButton>
        )}
        {renderList()}
        <S.TaskForm>
          <S.AddItemContainer>
            <S.AddButton
              type="button"
              onClick={() => handleSubmit(state.activeListTodos.id)}
              disabled={!text}
            >
              +
            </S.AddButton>
            <S.TextInput
              type="text"
              placeholder={isTodoList ? "Create new todo" : "Create new list"}
              onChange={handleTextChange}
              value={text}
            />
          </S.AddItemContainer>
        </S.TaskForm>
      </S.Container>
    </S.Layout>
  )
}