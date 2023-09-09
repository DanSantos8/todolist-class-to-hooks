import * as S from "./styles"
import { useGlobalContext } from "../../context/globalContext"
import FormAddItem from "../FormAddItem"
import FormList from "../FormList"
import BackToList from "../BackToList"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"

export default function Todo() {
  const { state } = useGlobalContext()

  const isTodoList = !!state.activeListTodos.id
  const isEditing = state.controls.isEditing

  return (
    <S.Layout>
      <S.Container>
        <ToastContainer autoClose={2000} />
        {isTodoList && <BackToList />}
        <FormList />
        {!isEditing && <FormAddItem />}
      </S.Container>
    </S.Layout>
  )
}
