import { useGlobalContext } from "../../context/globalContext"

export default function useTodoItem() {
  const { dispatch, state } = useGlobalContext()
  console.log(state.activeListTodos)
  const markCompleted = (itemId: number) => {
    dispatch({ type: "update_status_todo", payload: itemId })
  }

  const deleteItem = (itemId: number) => {
    dispatch({ type: "remove_todo_item", payload: itemId })
  }

  return {
    deleteItem,
    markCompleted,
  }
}
