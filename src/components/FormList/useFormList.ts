import { useForm } from "react-hook-form"
import { useGlobalContext } from "../../context/globalContext"

export default function useFormList() {
  const { state, dispatch } = useGlobalContext()
  const { register, handleSubmit } = useForm()

  const lists = state.controls.isEditing
    ? state.controls.currentList
    : state.lists

  const isTodoList = !!state.activeListTodos.id
  return {
    register,
    handleSubmit,
    dispatch,
    state,
    lists,
    isTodoList,
  }
}
