import { Button } from "./styles"
import useControls from "./useControls"

export default function Controls() {
  const { handleEditing, isEditing } = useControls()
  return (
    <Button onClick={handleEditing} isEditing={isEditing}>
      {isEditing ? "Stop" : "Edit"}
    </Button>
  )
}
