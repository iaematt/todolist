import React, { FC } from 'react'

import { Container } from './styles'
import { Item } from '@components/ui'

const List: FC = () => {
  return (
    <Container>
      <Item complete={true} task="Estudar" />
      <Item complete={false} task="Ler livro" />
      <Item complete={false} task="Lavar roupas" />
      <Item complete={false} task="Assistir seriados" />
      <Item complete={false} task="Trabalhar" />
    </Container>
  )
}

export default List
