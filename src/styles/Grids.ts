/* Core */
import styled from 'styled-components';

export const HomePageGridStyles = styled.div`
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(2, minmax(auto, 1fr));
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
        transform: rotate(-2deg) translateY(-140%);
        width: 100%;
        left: 0;
    }

    & .mark {
        display: inline;
    }
`;
