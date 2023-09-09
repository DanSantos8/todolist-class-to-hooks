import { useGlobalContext } from "../../context/globalContext"

export default function useBackToList() {
  const { dispatch, state } = useGlobalContext()

  const backToListTodos = () => {
    dispatch({ type: "reset_active_list_todos" })
  }

  const listId = state.activeListTodos.id

  const listName = state.lists.find((list) => list.id === listId)?.name

  return {
    backToListTodos,
    listName,
  }
}
