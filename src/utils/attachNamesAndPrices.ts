/* Core */
import { getSrc } from 'gatsby-plugin-image';

/* Instruments */
import { calculatePizzaPrice } from './calculatePizzaPrice';

export const attachNamesAndPrices = (order, pizzas) => {
    const result = order.map(orderItem => {
        const pizza = pizzas.find(pizza => pizza.id === orderItem.id);

        return {
            ...orderItem,
            name:      pizza.name,
            thumbnail: getSrc(pizza.image.asset),
            price:     calculatePizzaPrice(pizza.price, orderItem.size),
        };
    });

    return result;
};
