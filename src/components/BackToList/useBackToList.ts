import { useGlobalContext } from "../../context/globalContext"
import { ActionsEnum } from "../../reducer/enums"

export default function useBackToList() {
  const { dispatch, state } = useGlobalContext()

  const backToListTodos = () => {
    dispatch({ type: ActionsEnum.RESET_ACTIVE_LIST_TODOS })
  }

  const listId = state.activeListTodos.id

  const currentList = state.lists.find((list) => list.id === listId)

  return {
    backToListTodos,
    listName: currentList?.name,
    emoji: currentList?.emoji,
  }
}
