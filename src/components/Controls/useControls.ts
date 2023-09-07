import { useGlobalContext } from "../../context/globalContext"

export default function useControls() {
  const {
    state: {
      controls: { isEditing },
    },
    dispatch,
  } = useGlobalContext()
  const handleEditing = () => {
    dispatch({ type: "toggle_edit", payload: !isEditing })
  }

  return {
    handleEditing,
    isEditing,
  }
}
