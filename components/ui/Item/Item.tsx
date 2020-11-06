import React, { FC } from 'react'
import { CgRadioCheck, CgCloseO, CgCheckO } from 'react-icons/cg'

import { Container, StatusTask, Delete, Task, Status } from './styles'

interface Props {
  complete: boolean
  task: string
}

const Item: FC<Props> = ({ complete, task }) => {
  return (
    <Container>
      <StatusTask>
        <Status>
          {complete ? (
            <CgRadioCheck size={20} />
          ) : (
            <CgCheckO size={20} color="#27ae60" />
          )}
        </Status>

        <Task>{task}</Task>
      </StatusTask>

      <Delete>
        <CgCloseO size={20} color="#ed2a4c" />
      </Delete>
    </Container>
  )
}

export default Item
