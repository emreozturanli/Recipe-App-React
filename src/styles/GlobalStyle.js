import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #f1f5f8 ;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
  }

  ul{
    list-style-type: none;
    padding:0;
    margin: 0;
  }

`;