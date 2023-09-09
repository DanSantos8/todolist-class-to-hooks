import { useForm } from "react-hook-form"
import { useGlobalContext } from "../../context/globalContext"
import { ActionsEnum } from "../../reducer/enums"

export default function useFormList() {
  const { state, dispatch } = useGlobalContext()
  const { register, handleSubmit } = useForm()

  const lists = state.controls.isEditing
    ? state.controls.currentList
    : state.lists

  const isTodoList = !!state.activeListTodos.id

  const onSubmit = (data: { [key: number]: string }) => {
    dispatch({ type: ActionsEnum.EDIT_LIST_TODOS, payload: data })
  }

  const todos = state.activeListTodos.todos
  return {
    register,
    handleSubmit,
    lists,
    isTodoList,
    onSubmit,
    todos,
  }
}
