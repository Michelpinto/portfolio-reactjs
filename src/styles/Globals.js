import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
${normalize};

body {
    font-family: "Montserrat", sans-serif;
    padding: 3rem 6rem;
    margin: auto;
    max-width: 1400px;
    color: #ebebeb;
    background-color: #1a1a1a;

    @media ${(props) => props.theme.breakpoints.lg} {
        padding: 3rem;
    } ;

    @media screen and (max-width: 400px) {
        padding: 2rem;
  }
}

html {
    box-sizing: border-box;
    font-size: 62.5%;
    scroll-behavior: smooth;

    @media ${(props) => props.theme.breakpoints.lg} {
        font-size: 50%;
    } ;
}

a {
    color: inherit;
    text-decoration: none;
}

*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


`;

export default GlobalStyles;
