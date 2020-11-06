import React, {
  FC,
  createContext,
  useState,
  useContext,
  useEffect
} from 'react'

interface ContextData {}

const TodoContext = createContext<ContextData>({} as ContextData)

export const Provider: FC = ({ children }) => {
  return <TodoContext.Provider value>{children}</TodoContext.Provider>
}

export function useTodo() {
  return useContext(TodoContext)
}
