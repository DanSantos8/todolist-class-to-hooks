import { toast } from "react-toastify"
import { useGlobalContext } from "../../context/globalContext"
import { ActionsEnum } from "../../reducer/enums"

export default function useControls() {
  const {
    state: {
      lists,
      controls: { isEditing },
    },
    dispatch,
  } = useGlobalContext()

  const handleIsEditing = () => {
    dispatch({ type: ActionsEnum.TOGGLE_EDIT, payload: !isEditing })
  }

  const notify = () => {
    toast.success("Your changes were applied!")
  }

  const hasItems = !!lists.length

  return {
    handleIsEditing,
    isEditing,
    notify,
    hasItems,
  }
}
