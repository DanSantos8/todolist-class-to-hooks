import { IList } from "../../utils/types"
import * as S from "./styles"
export default function ListTodosList(props: {
  lists: IList[]
  openTodosList: (id: number) => void
}) {
  const { lists, openTodosList } = props
  return (
    <S.Container>
      {lists.map((list) => (
        <li key={list.id}>
          <button onClick={() => openTodosList(list.id)}>{list.name}</button>
        </li>
      ))}
    </S.Container>
  )
}
