import React, { FC } from 'react'
import { FaGithub } from 'react-icons/fa'

import { Container } from './styles'

const Footer: FC = () => {
  return (
    <Container>
      <a
        href="https://github.com/iaematt/todolist"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub size={25} />
      </a>
    </Container>
  )
}

export default Footer
