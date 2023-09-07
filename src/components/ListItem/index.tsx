import { useGlobalContext } from "../../context/globalContext"
import { ListItemProps } from "../../utils/types"
import * as S from "./styles"
import useListItem from "./useListItem"
export default function ListItem(props: ListItemProps) {
  const {
    state: {
      controls: { isEditing },
    },
  } = useGlobalContext()
  const { id, name, emoji, todosQuantity } = props

  const { handleTextUpdated, textUpdated, openTodosList } = useListItem(name)

  return (
    <S.Item key={id}>
      <div>{emoji}</div>
      {isEditing && (
        <S.Input
          value={textUpdated}
          onChange={(e) => handleTextUpdated(e.target.value)}
        />
      )}
      {!isEditing && (
        <S.Button onClick={() => openTodosList(id)}>{name}</S.Button>
      )}

      <S.TodosQuantity>{todosQuantity}</S.TodosQuantity>
    </S.Item>
  )
}
