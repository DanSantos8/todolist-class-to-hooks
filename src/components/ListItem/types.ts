import { UseFormRegister } from "react-hook-form"

export interface ListItemProps {
  register?: UseFormRegister<{ [key: string]: string }>
  id: number
  name: string
  emoji: string
  todosQuantity: number
}
