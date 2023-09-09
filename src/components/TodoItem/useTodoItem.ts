import { useState } from "react"
import { useGlobalContext } from "../../context/globalContext"

export default function useTodoItem(text: string) {
  const { dispatch } = useGlobalContext()
  const [newText, setNewText] = useState(text)
  const [isEditing, setIsEditing] = useState(false)

  const markCompleted = (itemId: number) => {
    dispatch({ type: "update_status_todo", payload: itemId })
  }

  const deleteItem = (itemId: number) => {
    dispatch({ type: "remove_todo_item", payload: itemId })
  }

  const handleApplyEdit = (itemId: number) => {
    dispatch({ type: "edit_todo_item", payload: { itemId, text: newText } })
    setNewText(newText)
    setIsEditing(!isEditing)
  }

  const handleEditItem = () => {
    setNewText(text)
    setIsEditing(!isEditing)
  }

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewText(e.target.value)

  return {
    deleteItem,
    markCompleted,
    handleEditItem,
    handleApplyEdit,
    newText,
    isEditing,
    onChangeText,
  }
}
