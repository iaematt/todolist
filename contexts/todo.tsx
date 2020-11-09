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
  addTask(event: FormEvent<HTMLInputElement>): Promise<void>
  removeTask(index: number): void
  completeTask(index: number): void
}

const TodoContext = createContext<TodoContextData>({} as TodoContextData)

export const TodoProvider: FC = ({ children }) => {
  const [tasks, setTasks] = useState<Task[] | []>([])

  async function addTask(event: FormEvent<HTMLInputElement>) {
    event.preventDefault()

    await setTasks([
      {
        id: Number(uniqueId()),
        name: event.target.task.value,
        completed: false
      },
      ...tasks
    ])

    event.target.task.value = ''
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
        addTask,
        removeTask,
        completeTask
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export function useTodo() {
  return useContext(TodoContext)
}
