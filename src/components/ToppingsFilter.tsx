/* Core */
import React                             from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled                            from 'styled-components';

export const ToppingsFilter: React.FC<ToppingsFilterProps> = props => {
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
        <ToppingsStyles>
            <Link to = '/pizzas'>
                <span className = 'name'>All</span>
                <span className = 'count'>{pizzas.nodes.length}</span>
            </Link>
            {toppingLinks}
        </ToppingsStyles>
    );
};

/* Styles */
const ToppingsStyles = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 4rem;

    & a {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: 0 rem;
        align-items: center;
        padding: 5px;
        font-size: clamp(1.5rem, 1.4vw, 2.5rem);
        background: var(--grey);
        border-radius: 2px;

        & .count {
            padding: 2px 5px;
            background: white;
        }

        &[aria-current='page'] {
            background: var(--yellow);
        }
    }
`;

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

/* Types */
interface ToppingsFilterProps {
    activeTopping: string;
}
