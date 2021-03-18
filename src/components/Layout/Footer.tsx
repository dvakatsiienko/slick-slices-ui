/* Core */
import * as React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className = 'center'>
            <p>&copy; Slick's Slices {new Date().getFullYear()}.</p>
        </footer>
    );
};
