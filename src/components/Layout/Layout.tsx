/* Core */
import React from 'react';
import styled from 'styled-components';
import 'normalize.css';

/* Components */
import { GlobalStyles, Typography } from '../../styles';
import { Nav } from './Nav';
import { Footer } from './Footer';

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
    margin: 12rem auto 4rem auto;
    margin-top: clamp(2rem, 10vw, 12rem);
    background: white url(${stripes});
    background-size: 1500px;
    padding: clamp(5px, 1vw, 25px);
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.044);
    border: 5px solid white;

    @media (max-width: 1100px) {
        margin-left: 1.5rem;
        margin-right: 1.5rem;
    }
`;

const ContentStyles = styled.div`
    background: white;
    padding: 2rem;
`;
