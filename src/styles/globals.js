const { createGlobalStyle } = require("styled-components");


const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  html, body {
    font-family: Lato, Helvetica, Arial, sans-serif;
    width: 100vw;
    overflox-x: hidden;
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
    padding:0;
  }

  a {
    text-decoration: none;
    
    &:visited {
      color: inherit
    }
  }

`

export default GlobalStyles;