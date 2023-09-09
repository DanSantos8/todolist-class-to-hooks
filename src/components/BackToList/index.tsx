import { BackArrow } from "../Icons"
import * as S from "./styles"
import useBackToList from "./useBackToList"

export default function BackToList() {
  const { backToListTodos, listName } = useBackToList()
  return (
    <S.Container>
      <S.BackToListButton onClick={() => backToListTodos()}>
        <BackArrow />
        <h1>{listName}</h1>
      </S.BackToListButton>
    </S.Container>
  )
}
