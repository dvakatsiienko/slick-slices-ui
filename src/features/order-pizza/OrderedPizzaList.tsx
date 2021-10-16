/* Core */
import { GatsbyImage } from 'gatsby-plugin-image';

/* Instruments */
import * as gql from '@/graphql';
import { calculatePizzaPrice, formatMoney } from '@/utils';
import { OrderedPizza, RemoveFromOrder } from './types';

export const OrderedPizzaList: React.FC<OrderedPizzaListProps> = props => {
    const orderPizzaListJSX = props.orderedPizzas.map((orderedPizza, index) => {
        const pizza = props.pizzaList.find(
            pizza => pizza.id === orderedPizza.id,
        );

        const price = formatMoney(
            calculatePizzaPrice(pizza.price, orderedPizza.size),
        );

        const removeFromOrder = () => props.removeFromOrder(index);

        return (
            <div
                className = 'ordered-pizza-list'
                key = { `${orderedPizza.id}-${index}` }
            >
                <GatsbyImage
                    alt = { pizza.name }
                    image = { pizza.image.asset.gatsbyImageData }
                />
                <h2>{pizza.name}</h2>
                <p>
                    {price}
                    <button
                        className = 'remove'
                        title = { `Remove ${orderedPizza.size} ${pizza.name}` }
                        type = 'button'
                        onClick = { removeFromOrder }
                    >
                        &times;
                    </button>
                </p>
            </div>
        );
    });

    return (
        <>
            <p>Your have {props.orderedPizzas.length} items in your order!</p>
            {orderPizzaListJSX}
        </>
    );
};

/* Types */
interface OrderedPizzaListProps {
    orderedPizzas: OrderedPizza[];
    pizzaList: gql.SanityPizzaFragment[];
    removeFromOrder: RemoveFromOrder;
}
