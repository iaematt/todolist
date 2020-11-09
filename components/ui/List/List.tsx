import React, { FC } from 'react'

import { Container } from './styles'
import { Item } from '@components/ui'

import { useTodo } from '@contexts/Todo'

const List: FC = () => {
  const { tasks } = useTodo()

  return (
    <Container>
      {tasks?.map((item, index) => (
        <Item
          key={index}
          index={item.id}
          complete={item.completed}
          task={item.name}
        />
      ))}
    </Container>
  )
}

export default List
