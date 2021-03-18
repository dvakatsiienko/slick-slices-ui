/* Core */
import * as React from 'react';
import styled     from 'styled-components';
import 'normalize.css';

/* Components */
import { GlobalStyles, Typography } from '../../styles';
import { Nav }                      from './Nav';
import { Footer }                   from './Footer';

/* Instruments */
import stripes from '../../assets/images/stripes.svg';

export const Layout: React.FC = props => {
    return (
        <main>
            <GlobalStyles />
            <Typography />
            <SiteBorderStyles>
                <ContentStyles>
                    <Nav />

                    {props.children}

                    <Footer />
                </ContentStyles>
            </SiteBorderStyles>
        </main>
    );
};

/* Styles */
const SiteBorderStyles = styled.div`
    max-width: 1000px;
    padding: clamp(5px, 1vw, 25px);
    margin: 12rem auto 4rem auto;
    margin-top: clamp(2rem, 10vw, 12rem);
    background: white url(${stripes});
    background-size: 1500px;
    border: 5px solid white;
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.044);

    @media (max-width: 1100px) {
        margin-right: 1.5rem;
        margin-left: 1.5rem;
    }
`;

const ContentStyles = styled.div`
    padding: 2rem;
    background: white;
`;
