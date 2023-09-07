import Dropdown from "../Dropdown"
import * as S from "./styles"
import useForm from "./useForm"

export default function Form() {
  const { handleEmoji, handleSubmit, handleTextChange, isTodoList, text } =
    useForm()
  return (
    <S.TaskForm onSubmit={() => handleSubmit()}>
      <S.AddItemContainer>
        {!isTodoList && <Dropdown handleEmoji={handleEmoji} />}
        <S.TextInput
          type="text"
          placeholder={isTodoList ? "Create new todo" : "Create new list"}
          onChange={handleTextChange}
          value={text}
        />
        <S.AddButton onClick={() => handleSubmit()} disabled={!text}>
          +
        </S.AddButton>
      </S.AddItemContainer>
    </S.TaskForm>
  )
}
