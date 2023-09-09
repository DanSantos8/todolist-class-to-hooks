import { TodoListProps } from "../../utils/types"
import TodoItem from "../TodoItem"
import * as S from "./styles"
import useTodosList from "./useTodoList"
export default function TodoList(props: TodoListProps) {
  const { items } = props
  const {
    handleEnableMultipleDelete,
    enableMultipleDelete,
    handleTodosToDelete,
    todosListToDelete,
    handleDeleteTodos,
  } = useTodosList(items)

  return (
    <S.Container>
      <S.Controls>
        <S.ControlButton
          type="button"
          onClick={() => handleEnableMultipleDelete()}
          multipleDeleteEnabled={enableMultipleDelete}
        >
          {enableMultipleDelete ? "Cancel" : "Multiple Delete"}
        </S.ControlButton>

        {enableMultipleDelete && (
          <S.ControlButton type="button" onClick={() => handleDeleteTodos()}>
            Apply
          </S.ControlButton>
        )}
      </S.Controls>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          text={item.text}
          completed={item.done}
          isMultipleDeleteActive={enableMultipleDelete}
          handleTodosListToDelete={handleTodosToDelete}
          todosListToDelete={todosListToDelete}
        />
      ))}
    </S.Container>
  )
}
