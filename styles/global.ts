import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  html, body {
    height: 100%;
  }

  body, input, text-area, button {
    font-family: 'Roboto', sans-serif;
    color: ${props => props.theme.colors.text};
    font-size: 14px;
  }

  body {
    background: ${props => props.theme.colors.background};
    font-size: 14px;
    font-weight: 400;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  a {
    color: ${props => props.theme.colors.background};
    text-decoration: none;
  }
`
