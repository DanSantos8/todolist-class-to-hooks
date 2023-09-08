import { UseFormRegister } from "react-hook-form"
import { IList } from "../../utils/types"
import ListItem from "../ListItem"
import * as S from "./styles"
export default function List(props: {
  lists: IList[]
  register?: UseFormRegister<{ [key: string]: string }>
}) {
  const { lists, register } = props
  return (
    <S.Container>
      {lists.map((list) => (
        <ListItem
          key={list.id}
          id={list.id}
          name={list.name}
          emoji={list.emoji}
          todosQuantity={list.todos.length}
          register={register}
        />
      ))}
    </S.Container>
  )
}
