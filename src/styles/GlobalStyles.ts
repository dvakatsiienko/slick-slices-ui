/* Core */
import { createGlobalStyle } from 'styled-components';

/* Instruments */
import bg      from '../assets/images/bg.svg';
import stripes from '../assets/images/stripes.svg';

export const GlobalStyles = createGlobalStyle`
    :root {
        --red: #FF4949;
        --black: #2e2e2e;
        --yellow: #ffc600;
        --white: #fff;
        --grey: #efefef;
    }

    html {
        font-size: 10px;
        background-image: url(${bg});
        background-attachment: fixed;
        background-size: 450px;
        scrollbar-width: thin;
        scrollbar-color: var(--red) var(--white);
    }

    body {
        font-size: 2rem;
    }

    fieldset {
        border-color: rgba(0, 0, 0, 0.1);
        border-width: 1px;
    }

    button {
        --cast: 2px;

        padding: 0.6rem 1rem;
        color: white;
        text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
        cursor: pointer;
        background: var(--red);
        border: 0;
        border-radius: 2px;
        box-shadow: var(--cast) var(--cast) 0 var(--grey);
        transition: all 0.2s;

        &:hover {
            --cast: 4px;
        }
    }

    & .gatsby-image-wrapper img[src*=base64\\,] {
        image-rendering: pixelated;
        image-rendering: -moz-crisp-edges;
    }

    /* Scrollbar Styles */
    body::-webkit-scrollbar {
        width: 12px;
    }

    body::-webkit-scrollbar-track {
        background: var(--white);
    }

    body::-webkit-scrollbar-thumb {
        background-color: var(--red);
        border: 3px solid var(--white);
        border-radius: 6px;
    }

    hr {
        height: 8px;
        background-image: url(${stripes});
        background-size: 1500px;
        border: 0;
    }

    img {
        max-width: 100%;
    }

    .tilt {
        position: relative;
        display: inline-block;
        transform: rotate(-2deg);
    }
`;

export default GlobalStyles;
