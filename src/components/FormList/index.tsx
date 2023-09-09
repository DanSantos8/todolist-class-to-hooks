import { IList } from "../../utils/types"
import Controls from "../Controls"
import List from "../List"
import TodoList from "../TodoList"
import useFormList from "./useFormList"

export default function FormList() {
  const { handleSubmit, register, todos, lists, isTodoList, onSubmit } =
    useFormList()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {!isTodoList && <Controls />}
      {isTodoList ? (
        <TodoList items={todos} />
      ) : (
        <List lists={lists as IList[]} register={register} />
      )}
    </form>
  )
}
