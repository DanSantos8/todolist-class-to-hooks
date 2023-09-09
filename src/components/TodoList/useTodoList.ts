import { useState } from "react"
import { TodoListItem } from "../../utils/types"
import { useGlobalContext } from "../../context/globalContext"

export default function useTodosList(items: TodoListItem[]) {
  const { dispatch } = useGlobalContext()
  const [enableMultipleDelete, setEnableMultipleDelete] = useState(false)
  const [todosListToDelete, setTodosListToDelete] = useState<number[]>(
    items.map((item) => item.id)
  )

  const handleEnableMultipleDelete = () => {
    setEnableMultipleDelete((state) => !state)
    setTodosListToDelete(items.map((item) => item.id))
  }

  const handleTodosToDelete = (itemId: number) => {
    if (todosListToDelete.includes(itemId)) {
      setTodosListToDelete((state) => state.filter((item) => item !== itemId))
    } else {
      setTodosListToDelete((state) => [...state, itemId])
    }
  }

  const handleDeleteTodos = () => {
    dispatch({ type: "delete_todos", payload: todosListToDelete })
    setEnableMultipleDelete((state) => !state)
  }

  return {
    handleEnableMultipleDelete,
    enableMultipleDelete,
    handleTodosToDelete,
    todosListToDelete,
    handleDeleteTodos,
  }
}
