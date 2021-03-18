/* Core */
import * as React from 'react';
import Image      from 'gatsby-image';

/* Components */
import { MenuItemStyles } from '../styles';

/* Instruments */
import { calculatePizzaPrice, formatMoney } from '../utils';

export const PizzaOrder: React.FC<PizzaOrderProps> = props => {
    const orderListJSX = props.order.map((order, index) => {
        const pizza = props.pizzas.find(pizza => pizza.id === order.id);
        const price = formatMoney(calculatePizzaPrice(pizza.price, order.size));
        const removeFromOrder = () => props.removeFromOrder(index);

        return (
            <MenuItemStyles key = { `${order.id}-${index}` }>
                <Image fluid = { pizza.image.asset.fluid } />
                <h2>{pizza.name}</h2>
                <p>
                    {price}
                    <button
                        className = 'remove'
                        title = { `Remove ${order.size} ${pizza.name}` }
                        type = 'button'
                        onClick = { removeFromOrder }
                    >
                        &times;
                    </button>
                </p>
            </MenuItemStyles>
        );
    });

    return (
        <>
            <p>Your have {props.order.length} items in your order!</p>
            {orderListJSX}
        </>
    );
};

/* Types */
interface PizzaOrderProps {
    order: { id: string; size: 'S' | 'M' | 'L' }[];
}
