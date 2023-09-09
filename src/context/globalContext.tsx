import { createContext, useContext, useReducer } from "react"
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
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext)
