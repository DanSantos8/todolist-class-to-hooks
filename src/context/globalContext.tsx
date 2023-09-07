import { createContext, useContext, useReducer } from "react"
import { reducer } from "../reducer"
import { Action, State, initialState } from "../utils/types"

const GlobalContext = createContext<{
  state: State
  dispatch: React.Dispatch<Action>
}>(undefined!)

export const GlobalContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext)
