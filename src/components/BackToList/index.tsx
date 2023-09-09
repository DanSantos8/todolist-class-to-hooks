import { BackArrow } from "../Icons"
import * as S from "./styles"
import useBackToList from "./useBackToList"

export default function BackToList() {
  const { backToListTodos, listName, emoji } = useBackToList()
  return (
    <S.Container>
      <S.BackToListButton onClick={() => backToListTodos()}>
        <BackArrow />
        <S.Head>
          <span>{emoji}</span>
          <span>{listName}</span>
        </S.Head>
      </S.BackToListButton>
    </S.Container>
  )
}
