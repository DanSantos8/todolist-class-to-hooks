import { ChangeEvent, useState } from "react"
import { useGlobalContext } from "../../context/globalContext"
import { EmojisEnum } from "../../utils/enums"

export default function useForm() {
  const [text, setText] = useState("")
  const [emoji, setEmoji] = useState<string>(EmojisEnum.smile_face)
  const { dispatch, state } = useGlobalContext()

  const isTodoList = !!state.activeListTodos.id

  const handleEmoji = (emoji: string) => setEmoji(emoji)

  const handleSubmit = () => {
    const id = state.activeListTodos.id
    setText("")
    if (id) {
      handleAddItem(id!)
    } else {
      handleAddList()
    }
  }
  const handleAddList = () => {
    const newList = {
      id: Date.now(),
      name: text,
      emoji,
      todos: [],
    }
    dispatch({ type: "add_list_todos", payload: newList })
  }

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  const handleAddItem = (id: number) => {
    const newItem = {
      id: Date.now(),
      text: text,
      done: false,
    }

    dispatch({ type: "add_todo", payload: { item: newItem, listId: id } })
  }
  return {
    handleEmoji,
    isTodoList,
    handleTextChange,
    handleSubmit,
    text,
    state,
  }
}
