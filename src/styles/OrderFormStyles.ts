/* Core */
import styled from 'styled-components';

export const OrderFormStyles = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    & fieldset {
        display: grid;
        gap: 1rem;
        grid-column: span 2;
        max-height: 600px;
        overflow: auto;

        & legend {
            width: max-content;
            padding: 0 5px;
        }

        & label {
            display: grid;
            gap: 1rem;
            align-content: start;
        }

        & label + label {
            margin-top: 1rem;
        }

        &.order,
        &.menu {
            grid-column: span 1;
            height: 600px;
        }

        &.order {
            display: flex;
            flex-direction: column;
        }

        & button:disabled {
            background-color: grey;
            cursor: not-allowed;
        }
    }

    & .mapleSyrup {
        display: none;
    }

    @media (max-width: 900px) {
        & fieldset.menu,
        & fieldset.order {
            grid-column: span 2;
        }
    }
`;
