import * as S from "./styles"
import useControls from "./useControls"

export default function Controls() {
  const { handleIsEditing, isEditing, notify, hasItems } = useControls()

  if (isEditing) {
    return (
      <S.Container>
        <S.Button onClick={() => handleIsEditing()} danger={isEditing}>
          Cancel
        </S.Button>

        <S.Button type="submit" onClick={notify}>
          Apply
        </S.Button>
      </S.Container>
    )
  }
  return (
    <>
      <S.Container>
        {hasItems && (
          <S.Button onClick={() => handleIsEditing()}>Edit</S.Button>
        )}
      </S.Container>
    </>
  )
}
