import { useGlobalContext } from "../../context/globalContext"
import { ListItemProps } from "./types"
import * as S from "./styles"
import useListItem from "./useListItem"
export default function ListItem(props: ListItemProps) {
  const {
    state: {
      controls: { isEditing },
    },
  } = useGlobalContext()
  const { id, name, emoji, todosQuantity, register } = props

  const { openTodosList, removeItem } = useListItem(name)

  return (
    <S.Item key={id}>
      <div>{emoji}</div>
      {isEditing && (
        <S.Input
          {...register!(id.toString())}
          defaultValue={name}
          //onChange={(e) => handleTextUpdated(e.target.value)}
        />
      )}
      {!isEditing && (
        <S.Button onClick={() => openTodosList(id)}>{name}</S.Button>
      )}

      {isEditing && <S.Remove onClick={() => removeItem(id)}>Delete</S.Remove>}

      <S.TodosQuantity>{todosQuantity}</S.TodosQuantity>
    </S.Item>
  )
}
