import styled from 'styled-components'
import { lighten, darken } from 'polished'

export const Container = styled.button`
  width: 100%;
  margin-top: 5px;
  padding: 12px 0;
  font-weight: 500;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: ${props => props.theme.colors.buttonColor};

  &:hover {
    background-color: ${props =>
      darken(0.04, props.theme.colors.primary as string)};
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
  }

  :active {
    background-color: ${props =>
      lighten(0.01, props.theme.colors.primary as string)};
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
  }
`
