import { createContext, useContext, useEffect, useReducer } from "react"
import { reducer } from "../reducer"
import {} from "../utils/types"
import { Action, State, initialState } from "../reducer/types"

const GlobalContext = createContext<{
  state: State
  dispatch: React.Dispatch<Action>
}>(undefined!)

export const GlobalContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState, (initial) => {
    const savedState = localStorage.getItem("todoListState")
    return savedState ? JSON.parse(savedState) : initial
  })

  localStorage.setItem("todoListState", JSON.stringify(state))

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext)
