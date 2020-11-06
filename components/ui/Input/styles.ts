import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.input`
  width: 100%;
  padding: 10px;
  background-color: ${props => props.theme.colors.input};
  border-radius: 4px;
  border: 2px solid ${props => darken(0.09, props.theme.colors.input as string)};
  font-weight: 500;

  transition: all 0.2s ease-in-out;

  &::placeholder {
    font-weight: 500;
  }

  &:focus {
    border-color: ${props => props.theme.colors.primary};
  }
`
