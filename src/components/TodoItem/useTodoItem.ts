import { useState } from "react"
import { useGlobalContext } from "../../context/globalContext"
import { ActionsEnum } from "../../reducer/enums"

export default function useTodoItem(text: string) {
  const { dispatch } = useGlobalContext()
  const [newText, setNewText] = useState(text)
  const [isEditing, setIsEditing] = useState(false)

  const markCompleted = (itemId: number) => {
    dispatch({ type: ActionsEnum.UPDATE_STATUS_TODO, payload: itemId })
  }

  const deleteItem = (itemId: number) => {
    dispatch({ type: ActionsEnum.REMOVE_TODO_ITEM, payload: itemId })
  }

  const handleApplyEdit = (itemId: number) => {
    dispatch({
      type: ActionsEnum.EDIT_TODO_ITEM,
      payload: { itemId, text: newText },
    })
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
