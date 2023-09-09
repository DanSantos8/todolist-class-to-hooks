import * as S from "./styles"
import { useGlobalContext } from "../../context/globalContext"
import FormAddItem from "../FormAddItem"
import FormList from "../FormList"
import BackToList from "../BackToList"

export default function Todo() {
  const { state } = useGlobalContext()

  const isTodoList = !!state.activeListTodos.id
  const isEditing = state.controls.isEditing

  return (
    <S.Layout>
      <S.Container>
        {isTodoList && <BackToList />}
        <FormList />
        {!isEditing && <FormAddItem />}
      </S.Container>
    </S.Layout>
  )
}
