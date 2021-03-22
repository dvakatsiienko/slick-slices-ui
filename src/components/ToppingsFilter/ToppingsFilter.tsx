/* Core */
import * as React                        from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

/* Instruments */
import { toppingsFilter as toppingsFilterStyles } from './styles.module.scss';

export const ToppingsFilter: React.FC = () => {
    const data = useStaticQuery(
        graphql`
            query {
                pizzas: allSanityPizza {
                    nodes {
                        id
                        name
                        toppings {
                            id
                            name
                            vegetarian
                        }
                    }
                }
            }
        `,
    );

    const { pizzas } = data;

    const toppingsWithCounts = countPizzasInToppings(pizzas.nodes);

    const toppingLinks = toppingsWithCounts.map(topping => {
        return (
            <Link
                key = { topping.id }
                to = { `/topping/${topping.name.toLowerCase()}` }
            >
                <span className = 'name'>{topping.name}</span>
                <span className = 'count'>{topping.count}</span>
            </Link>
        );
    });

    return (
        <div className = { toppingsFilterStyles }>
            <Link to = '/pizzas'>
                <span className = 'name'>All</span>
                <span className = 'count'>{pizzas.nodes.length}</span>
            </Link>
            {toppingLinks}
        </div>
    );
};

/* Helpers */
function countPizzasInToppings(pizzas) {
    const toppings = pizzas.map(pizza => pizza.toppings).flat();

    const counts = toppings.reduce((acc, topping) => {
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
    }, {});

    const sortedToppings = Object.values(counts).sort(
        (a, b) => b.count - a.count,
    );

    return sortedToppings;
}
