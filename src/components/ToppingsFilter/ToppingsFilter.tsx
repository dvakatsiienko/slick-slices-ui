/* Core */
import { Link } from 'gatsby';

/* Instruments */
import * as styles from './styles.module.scss';

/* Instruments */
import * as gql from '@/../graphql-types';
import { usePizzaToppingsQuery } from './usePizzaToppingsQuery';

export const ToppingsFilter: React.FC = () => {
    const pizzaToppingsQuery = usePizzaToppingsQuery();

    const toppingsWithCounts = countPizzasInToppings(pizzaToppingsQuery);

    const toppingLinks = toppingsWithCounts.map(topping => {
        return (
            <Link
                key = { topping.id }
                to = { `/topping/${topping.name.toLowerCase()}` }
            >
                {topping.name} ({topping.count})
            </Link>
        );
    });

    return (
        <div className = { styles.toppingsFilter }>
            <Link to = '/pizzas'>All toppings ({toppingsWithCounts.length})</Link>
            {toppingLinks}
        </div>
    );
};

/* Helpers */
function countPizzasInToppings(
    pizzaToppingsQuery: gql.PizzaToppingsQuery,
): CountedPizzaTopping[] {
    const toppings = pizzaToppingsQuery.pizzaToppings.nodes
        .map(pizza => pizza.toppings)
        .flat();

    const countedPizzaToppings = toppings.reduce<ReduceToppingsAccumulator>(
        (acc, topping) => {
            const existingTopping = acc[ topping.id ];

            if (existingTopping) {
                existingTopping.count += 1;
            } else {
                acc[ topping.id ] = {
                    id:    topping.id,
                    name:  topping.name,
                    count: 1,
                };
            }

            return acc;
        },
        {},
    );

    const sortedToppings = Object.values(countedPizzaToppings).sort(
        (a, b) => b.count - a.count,
    );

    return sortedToppings;
}

/* Types */
interface ReduceToppingsAccumulator {
    [id: string]: CountedPizzaTopping;
}
interface CountedPizzaTopping {
    id: string;
    name: string;
    count: number;
}
