import TodoList from "../TodoList"
import List from "../List"
import * as S from "./styles"
import Controls from "../Controls"
import { useGlobalContext } from "../../context/globalContext"
import Form from "../Form"

export default function Todo() {
  const { state, dispatch } = useGlobalContext()

  const isTodoList = !!state.activeListTodos.id

  const backToListTodos = () => {
    dispatch({ type: "reset_active_list_todos" })
  }

  const renderList = () => {
    return isTodoList ? (
      <TodoList items={state.activeListTodos.todos} />
    ) : (
      <List lists={state.lists} />
    )
  }
  return (
    <S.Layout>
      <S.Container>
        {/* <S.Title>TO DO LIST</S.Title> */}
        {isTodoList && (
          <S.BackToListButton onClick={() => backToListTodos()}>
            Back to list
          </S.BackToListButton>
        )}
        <Controls />
        {renderList()}
        <Form />
      </S.Container>
    </S.Layout>
  )
}
