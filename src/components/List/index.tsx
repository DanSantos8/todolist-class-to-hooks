import { IList } from "../../utils/types"
import ListItem from "../ListItem"
import * as S from "./styles"
export default function List(props: {
  lists: IList[]
  openTodosList: (id: number) => void
}) {
  const { lists, openTodosList } = props
  return (
    <S.Container>
      {lists.map((list) => (
        <ListItem
          id={list.id}
          name={list.name}
          openTodosList={openTodosList}
          emoji={list.emoji}
          todosQuantity={list.todos.length}
        />
      ))}
    </S.Container>
  )
}
