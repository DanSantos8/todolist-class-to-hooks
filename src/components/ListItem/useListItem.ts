import { useState } from "react"
import { useGlobalContext } from "../../context/globalContext"
import { ActionsEnum } from "../../reducer/enums"

export default function useListItem(name: string) {
  const { dispatch } = useGlobalContext()

  const [textUpdated, setTextUpdated] = useState(name)

  const handleTextUpdated = (text: string) => {
    setTextUpdated(text)
  }

  const openTodosList = (id: number) => {
    dispatch({ type: ActionsEnum.SET_ACTIVE_LIST_TODOS, payload: id })
  }

  const removeItem = (id: number) => {
    dispatch({ type: ActionsEnum.REMOVE_TODOS_LIST, payload: id })
  }
  return {
    textUpdated,
    handleTextUpdated,
    openTodosList,
    removeItem,
  }
}
