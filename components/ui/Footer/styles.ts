import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  a {
    opacity: 0.8;
    transition: all 0.2s ease-in-out;
  }

  a:hover {
    opacity: 1;
  }
`
