/* Core */
import * as React from 'react';

/* Components */
import { GridListStyles, ListGridItemStyles } from '../styles';

export const ItemGrid: React.FC<ItemGridProps> = props => {
    const itemListJSX = props.items.map(item => {
        return (
            <ListGridItemStyles key = { item._id }>
                <p>
                    <span className = 'mark'>{item.name}</span>
                </p>
                <img
                    alt = { item.name }
                    height = '400'
                    src = { `${item.image.asset.url}?w=500&h=400&fit=crop` }
                    style = {{
                        background:     `url(${item.image.asset.metadata.lqip})`,
                        backgroundSize: 'cover',
                    }}
                    width = '500'
                />
            </ListGridItemStyles>
        );
    });

    return <GridListStyles>{itemListJSX}</GridListStyles>;
};

/* Types */
interface ItemGridProps {
    items: [];
}
