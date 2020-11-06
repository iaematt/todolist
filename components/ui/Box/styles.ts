import styled from 'styled-components'

export const Container = styled.div`
  width: 350px;
  padding: 20px;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.box};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 768px) {
    width: 98%;
  }
`
