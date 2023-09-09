import { useState } from "react"
import { useGlobalContext } from "../../context/globalContext"

export default function useControls() {
  const {
    state: {
      controls: { isEditing },
    },
    dispatch,
  } = useGlobalContext()
  const [isApplied, setIsApplied] = useState(false)

  const handleIsEditing = () => {
    setIsApplied(false)
    dispatch({ type: "toggle_edit", payload: !isEditing })
  }

  const handleApply = () => {
    setIsApplied(true)
  }

  return {
    handleIsEditing,
    isEditing,
    isApplied,
    handleApply,
  }
}
