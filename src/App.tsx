import { ThemeProvider } from "styled-components"
import Todo from "./components/Todo"
import { GlobalContextProvider } from "./context/globalContext"
import { theme } from "./theme"

function TodoApp() {
  return (
    <GlobalContextProvider>
      <ThemeProvider theme={theme}>
        <Todo />
      </ThemeProvider>
    </GlobalContextProvider>
  )
}

export default TodoApp
