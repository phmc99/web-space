import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
}

:root{
    --purple-0: #AB92E1;
    --purple-50: #8262F7;
    --purple-60: #674CAE;
    --purple-100: #432C6D;
    --white: #FEFDFF;
    --offWhite: #F3F3F3;
    --roseWhite: #F5F4F0;
    --grey-0: #C0C0C0;
    --grey-50: #373737;
    --grey-100: #242424;
}

body, button {
    font-family: 'Poppins', sans-serif;
}

a {
    text-decoration: none;
}

`;

export default GlobalStyle;
