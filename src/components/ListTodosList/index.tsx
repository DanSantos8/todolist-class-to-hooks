import { IList } from "../../utils/types"

export default function ListTodosList(props: {
  lists: IList[]
  openTodosList: (id: number) => void
}) {
  const { lists, openTodosList } = props
  return (
    <ul>
      {lists.map((list) => (
        <li key={list.id}>
          <button onClick={() => openTodosList(list.id)}>{list.name}</button>
        </li>
      ))}
    </ul>
  )
}
