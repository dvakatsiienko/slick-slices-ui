/* Instruments */
import { calculatePizzaPrice } from '.';

export const attachNamesAndPrices = (order, pizzas) => {
    const result = order.map(orderItem => {
        const pizza = pizzas.find(pizza => pizza.id === orderItem.id);

        return {
            ...orderItem,
            name:      pizza.name,
            thumbnail: pizza.image.asset.fluid.src,
            price:     calculatePizzaPrice(pizza.price, orderItem.size),
        };
    });

    return result;
};
