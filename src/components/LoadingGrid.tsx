/* Core */
import React from 'react';

/* Components */
import { GridListStyles, ListGridItemStyles } from '../styles';

export const LoadingGrid: React.FC<LoadingGridProps> = props => {
    const grid = [ ...Array(props.count).keys() ].map((_, index) => {
        return (
            <ListGridItemStyles key = { index }>
                <p>
                    <span className = 'mark'>loading</span>
                </p>
                <img
                    alt = 'loading'
                    className = 'loading'
                    height = '400'
                    src = 'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAECAQAAADsOj3LAAAADklEQVR42mNkgANGQkwAAJoABWH6GPAAAAAASUVORK5CYII='
                    width = '500'
                />
            </ListGridItemStyles>
        );
    });

    return <GridListStyles>{grid}</GridListStyles>;
};

/* Types */
interface LoadingGridProps {
    count: number;
}
