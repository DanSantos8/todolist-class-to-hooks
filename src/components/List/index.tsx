import { IList } from "../../utils/types"
import ListItem from "../ListItem"
import * as S from "./styles"
export default function List(props: { lists: IList[] }) {
  const { lists } = props
  return (
    <S.Container>
      {lists.map((list) => (
        <ListItem
          key={list.id}
          id={list.id}
          name={list.name}
          emoji={list.emoji}
          todosQuantity={list.todos.length}
        />
      ))}
    </S.Container>
  )
}
