import { ListItemProps } from "../../utils/types"
import * as S from "./styles"
export default function ListItem(props: ListItemProps) {
  const { id, name, emoji, openTodosList } = props

  return (
    <S.Item key={id}>
      <div>{emoji}</div>
      <button onClick={() => openTodosList(id)}>{name}</button>
    </S.Item>
  )
}