import Todo from "./components/Todo"
import { GlobalContextProvider } from "./context/globalContext"

function TodoApp() {
  return (
    <GlobalContextProvider>
      <Todo />
    </GlobalContextProvider>
  )
}

export default TodoApp
