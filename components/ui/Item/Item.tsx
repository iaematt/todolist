import React, { FC } from 'react'
import { CgRadioCheck, CgCloseO, CgCheckO } from 'react-icons/cg'

import { Container, StatusTask, Delete, Task, Status } from './styles'

import { useTodo } from '@contexts/Todo'

interface Props {
  complete: boolean
  task: string
  index: number
}

const Item: FC<Props> = ({ complete, task, index }) => {
  const { removeTask, completeTask } = useTodo()

  return (
    <Container>
      <StatusTask>
        <Status>
          {complete ? (
            <>
              <CgCheckO
                size={20}
                color="#27ae60"
                onClick={() => completeTask(index)}
              />
            </>
          ) : (
            <CgRadioCheck size={20} onClick={() => completeTask(index)} />
          )}
        </Status>

        <Task>{task}</Task>
      </StatusTask>

      <Delete>
        <CgCloseO onClick={() => removeTask(index)} size={20} color="#ed2a4c" />
      </Delete>
    </Container>
  )
}

export default Item
