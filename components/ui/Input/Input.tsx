import React, { FC, FormEvent } from 'react'

import { Container } from './styles'

interface Props {
  name: string
  type?: string
  placeholder?: string
}

const Input: FC<Props> = ({ name, type = 'text', placeholder }) => {
  return (
    <Container name={name} type={type} placeholder={placeholder} required />
  )
}

export default Input
