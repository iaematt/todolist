import { darken } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 5px;
  padding-bottom: 5px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid
    ${props => darken(0.07, props.theme.colors.box as string)};

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 0;
  }
`

export const StatusTask = styled.div`
  display: flex;
  align-items: center;
`

export const Delete = styled.div`
  display: flex;
  align-items: center;

  svg {
    cursor: pointer;
  }
`

export const Task = styled.p`
  padding-left: 10px;
`

export const Status = styled.div`
  svg {
    cursor: pointer;
  }
`
