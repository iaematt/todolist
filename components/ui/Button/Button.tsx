import React, { FC } from 'react'

import { Container } from './styles'

const Button: FC = ({ children }) => {
  return <Container>{children}</Container>
}

export default Button
