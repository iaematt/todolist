import React, {
  FC,
  createContext,
  useState,
  useContext,
  FormEvent
} from 'react'
import { uniqueId } from 'lodash'

interface Task {
  id: number
  name: string
  completed: boolean
}

interface TodoContextData {
  tasks: Task[] | null
  value: string
  setValue: (event: any) => void
  addTask(event: FormEvent<HTMLInputElement>): Promise<void>
  removeTask(index: number): void
  completeTask(index: number): void
}

const TodoContext = createContext<TodoContextData>({} as TodoContextData)

export const TodoProvider: FC = ({ children }) => {
  const [tasks, setTasks] = useState<Task[] | []>([])
  const [value, setValue] = useState('')

  async function addTask(event: FormEvent<HTMLInputElement>) {
    event.preventDefault()

    await setTasks([
      { id: Number(uniqueId()), name: value, completed: false },
      ...tasks
    ])

    setValue('')
  }

  function removeTask(index: number) {
    setTasks(tasks.filter(task => task.id !== index))
  }

  function completeTask(index: number) {
    console.log('completar' + index)
  }

  return (
    <TodoContext.Provider
      value={{
        tasks,
        value,
        setValue,
        addTask,
        removeTask,
        completeTask
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useTodo() {
  return useContext(TodoContext)
}
