import React, { FC, FormEvent } from 'react'

import { Container } from './styles'

interface Props {
  name: string
  type?: string
  placeholder?: string
  value: string | number | undefined
  setValue(event: FormEvent<HTMLInputElement>): void
}

const Input: FC<Props> = ({
  name,
  type = 'text',
  placeholder,
  value,
  setValue
}) => {
  return (
    <Container
      value={value}
      onChange={event => setValue(event.target.value)}
      name={name}
      type={type}
      placeholder={placeholder}
      required
    />
  )
}

export default Input
