import { TodoItemProps } from "./types"
import * as S from "./styles"
import useTodoItem from "./useTodoItem"

export default function TodoItem(props: TodoItemProps) {
  const {
    completed,
    id,
    text,
    isMultipleDeleteActive,
    handleTodosListToDelete,
    todosListToDelete,
  } = props
  const {
    deleteItem,
    markCompleted,
    newText,
    isEditing,
    handleEditItem,
    handleApplyEdit,
    onChangeText,
    highlight,
  } = useTodoItem(text)

  return (
    <S.TodoItem className={highlight ? "highlight" : ""}>
      <S.Label completed={completed}>
        <S.CustomCheckBox>
          {!isMultipleDeleteActive ? (
            <>
              <S.Checkbox
                type="checkbox"
                checked={completed}
                onChange={() => markCompleted(id)}
              />
              <S.CheckMark></S.CheckMark>
            </>
          ) : (
            <>
              <S.Checkbox
                type="checkbox"
                checked={todosListToDelete.includes(id)}
                onChange={() => handleTodosListToDelete(id)}
                isDelete={isMultipleDeleteActive}
              />
              <S.CheckMark></S.CheckMark>
            </>
          )}
        </S.CustomCheckBox>
        {isEditing ? (
          <S.Input
            type="text"
            value={newText}
            onChange={onChangeText}
            autoFocus={true}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleApplyEdit(id)
              }
            }}
          />
        ) : (
          <span>{newText}</span>
        )}
      </S.Label>
      {isEditing && (
        <>
          <S.ControlButton onClick={() => handleEditItem()} danger>
            Cancel
          </S.ControlButton>
          <S.ControlButton onClick={() => handleApplyEdit(id)}>
            Apply
          </S.ControlButton>
        </>
      )}
      {!isEditing && (
        <S.ControlButton onClick={() => handleEditItem()}>Edit</S.ControlButton>
      )}

      <S.ControlButton type="button" onClick={() => deleteItem(id)} danger>
        Delete
      </S.ControlButton>
    </S.TodoItem>
  )
}
