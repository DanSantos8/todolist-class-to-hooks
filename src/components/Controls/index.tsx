import * as S from "./styles"
import useControls from "./useControls"

export default function Controls() {
  const { handleIsEditing, isEditing, isApplied, handleApply } = useControls()

  if (isEditing) {
    return (
      <S.Container>
        <S.Button onClick={() => handleIsEditing()} isEditing={isEditing}>
          {isApplied ? "Back" : "Cancel"}
        </S.Button>
        <S.Button type="submit" onClick={() => handleApply()}>
          {isApplied ? "Done" : "Apply"}
        </S.Button>
      </S.Container>
    )
  }
  return (
    <S.Container>
      <S.Button onClick={() => handleIsEditing()}>Edit</S.Button>
    </S.Container>
  )
}
