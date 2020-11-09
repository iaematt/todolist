import React, { FC } from 'react'

import { Container } from './styles'
import { useTodo } from '@contexts/Todo'

const Box: FC = ({ children }) => {
  const { addTask } = useTodo()
  return (
    <Container>
      <form onSubmit={addTask}>{children}</form>
    </Container>
  )
}

export default Box
