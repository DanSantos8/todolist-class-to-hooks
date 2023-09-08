import * as S from "./styles"
import { useGlobalContext } from "../../context/globalContext"
import FormAddItem from "../FormAddItem"
import FormList from "../FormList"

export default function Todo() {
  const { state, dispatch } = useGlobalContext()

  const isTodoList = !!state.activeListTodos.id
  const isEditing = state.controls.isEditing

  const backToListTodos = () => {
    dispatch({ type: "reset_active_list_todos" })
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
        <FormList />
        {!isEditing && <FormAddItem />}
      </S.Container>
    </S.Layout>
  )
}
