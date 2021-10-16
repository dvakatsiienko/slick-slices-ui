/* Core */
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';

/* Instruments */
import * as gql from '@/graphql';
import { calculatePizzaPrice, formatMoney } from '@/utils';
import type { AddToOrder, PizzaSize } from './types';

export const PizzaMenu: React.FC<PizzaMenuProps> = props => {
    const pizzaListJSX = props.pizzaList.slice(0, 9).map(pizza => {
        const image = getImage(pizza.image.asset as unknown as ImageDataLike);

        return (
            <div className = 'ordered-pizza-list-item' key = { pizza.id }>
                <GatsbyImage alt = { pizza.name } image = { image } />
                <h2>{pizza.name}</h2>

                <div className = 'controls'>
                    {[ 'S', 'M', 'L' ].map((size: PizzaSize, index) => {
                        const addToOrder = () => props.addToOrder({
                            id: pizza.id,
                            size,
                        });

                        const price = formatMoney(
                            calculatePizzaPrice(pizza.price, size),
                        );

                        return (
                            <button
                                key = { index }
                                type = 'button'
                                onClick = { addToOrder }
                            >
                                {size}
                                {price}
                            </button>
                        );
                    })}
                </div>
            </div>
        );
    });

    return <>{pizzaListJSX}</>;
};

/* Types */
interface PizzaMenuProps {
    pizzaList: gql.SanityPizzaFragment[];
    addToOrder: AddToOrder;
}
