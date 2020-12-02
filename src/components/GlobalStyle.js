import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: whitesmoke;
        font-family: 'Inter', sans-serif;
    }

    body {
        background: #1b1b1b;

    }

    button {
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid rgb(189, 29, 252);
        color: whitesmoke;
        transition: all 0.3s ease;
        background: transparent;
        &:hover {
            background-color: rgb(189, 29, 252);
        }
    }

    h2 {
        font-size: 3.5rem;
    }

    h4 {
        font-size: 1.5rem;
    }

    p {
        padding: 3rem 0rem;
        font-size: 1rem;
        font-weight: lighter;
        line-height: 125%;
    }

    a {
        font-size: 1.1.rem;
    }

    span {
        color: rgb(189, 29, 252);
        font-family: 'Lobster', cursive;
    }
`;

export default GlobalStyle;