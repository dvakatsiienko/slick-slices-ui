/* Core */
import { createGlobalStyle } from 'styled-components';

/* Instruments */
import font from '../assets/fonts/frenchfries.woff';

export const Typography = createGlobalStyle`
    @font-face {
        font-family: FrenchFries;
        src: url(${font});
    }

    & html {
        font-family: FrenchFries, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: var(--black);
    }

    & p,
    & li {
        letter-spacing: 0.5px;
    }

    & h1,
    & h2,
    & h3,
    & h4,
    & h5,
    & h6 {
        margin: 0;
        font-weight: normal;
    }

    & a {
        /* Chrome renders this weird with this font, so we turn it off */
        color: var(--black);
        text-decoration-skip-ink: none;
        text-decoration-color: var(--red);
    }

    & mark,
    & .mark {
        display: inline;
        padding: 0 2px 2px 2px;
        line-height: 1;
        background: var(--yellow);
    }

    & .center {
        text-align: center;
    }

    & .tilt {
        transform: rotate(-2deg);
    }
`;
