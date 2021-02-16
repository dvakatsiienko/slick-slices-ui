/* Core */
import React from 'react';
import 'normalize.css';

/* Components */
import { GlobalStyles, Typography } from '../../styles';
import { Nav } from './Nav';
import { Footer } from './Footer';

export const Layout: React.FC = props => {
    return (
        <main>
            <GlobalStyles />
            <Typography />
            <Nav />

            {props.children}

            <Footer />
        </main>
    );
};
