import { useState } from "react"
import { useGlobalContext } from "../../context/globalContext"

export default function useListItem(name: string) {
  const { dispatch } = useGlobalContext()

  const [textUpdated, setTextUpdated] = useState(name)

  const handleTextUpdated = (text: string) => {
    setTextUpdated(text)
  }

  const openTodosList = (id: number) => {
    dispatch({ type: "set_active_list_todos", payload: id })
  }

  const removeItem = (id: number) => {
    dispatch({ type: "remove_list_todo", payload: id })
  }
  return {
    textUpdated,
    handleTextUpdated,
    openTodosList,
    removeItem,
  }
}