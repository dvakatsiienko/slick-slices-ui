/* Instruments */
import { formatMoney }         from './formatMoney';
import { calculatePizzaPrice } from './calculatePizzaPrice';

export const calculateOrderTotal = (order, pizzas) => {
    const total = order.reduce((acc, orderItem) => {
        const currentPizza = pizzas.find(pizza => pizza.id === orderItem.id);

        return acc + calculatePizzaPrice(currentPizza.price, orderItem.size);
    }, 0);

    return formatMoney(total);
};
