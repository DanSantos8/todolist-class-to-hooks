import { ActionsEnum } from "../../reducer/enums"
import { IList } from "../../utils/types"
import Controls from "../Controls"
import List from "../List"
import TodoList from "../TodoList"
import useFormList from "./useFormList"

export default function FormList() {
  const { handleSubmit, register, state, dispatch, lists, isTodoList } =
    useFormList()

  const onSubmit = (data: { [key: number]: string }) => {
    dispatch({ type: ActionsEnum.EDIT_LIST_TODOS, payload: data })
  }

  const submit = handleSubmit(onSubmit)

  return (
    <form onSubmit={submit}>
      {!isTodoList && <Controls />}
      {isTodoList ? (
        <TodoList items={state.activeListTodos.todos} />
      ) : (
        <List lists={lists as IList[]} register={register} />
      )}
    </form>
  )
}
