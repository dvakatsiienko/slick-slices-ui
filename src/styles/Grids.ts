/* Core */
import styled from 'styled-components';

export const HomePageGridStyles = styled.div`
    --columns: 2;

    display: grid;
    gap: 20px;
    grid-template-columns: repeat(var(--columns), minmax(auto, 1fr));

    @media (max-width: 800px) {
        --columns: 1;
    }
`;

export const GridListStyles = styled.div`
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr;
`;

export const ListGridItemStyles = styled.div`
    position: relative;
    text-align: center;

    & img {
        height: auto;
        font-size: 0;

        &.loading {
            --shine: white;
            --background: var(--grey);

            background-image: linear-gradient(
                90deg,
                var(--background) 0px,
                var(--shine) 40px,
                var(--background) 80px
            );
            background-size: 500px;
            animation: shine 1s infinite linear;

            @keyframes shine {
                from {
                    background-position: 200%;
                }
                to {
                    background-position: -40%;
                }
            }
        }
    }

    & p {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        margin: 0;
        transform: rotate(-2deg) translateY(-10px);
        font-size: 2rem;
        font-size: clamp(12px, 5vw, 20px);
    }

    & .mark {
        display: inline;
    }
`;
