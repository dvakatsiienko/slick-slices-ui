/* Core */
import React    from 'react';
import { Link } from 'gatsby';
import Image    from 'gatsby-image';
import styled   from 'styled-components';

/* Instruments */
// import * as gql from '../../graphql-types';

export const PizzaList: React.FC<PizzaListProps> = props => {
    const pizzaListJSX = props.pizzas.allSanityPizza.nodes.map(pizza => {
        return <Pizza key = { pizza.id } pizza = { pizza } />;
    });

    return <PizzaGridStyles>{pizzaListJSX}</PizzaGridStyles>;
};

/* Styles */
const PizzaGridStyles = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-auto-rows: auto auto 500px;
    gap: 4rem;
`;

/* Types */
interface PizzaListProps {
    // pizzas: gql.SanityPizza[];
    pizzas: GatsbyTypes.allSanityPizzaQuery;
}

export const Pizza: React.FC<PizzaProps> = props => {
    const toppingsJSX = props.pizza.toppings
        .map(topping => {
            return topping.name;
        })
        .join(', ');

    return (
        <PizzaStyles>
            <h2>
                <Link to = { `/pizza/${props.pizza.slug.current}` }>
                    <span className = 'mark'>{props.pizza.name}</span>
                </Link>
            </h2>
            <p>{toppingsJSX}</p>
            <Image
                alt = { props.pizza.name }
                fluid = { props.pizza.image.asset.fluid }
            />
        </PizzaStyles>
    );
};

/* Styles */
const PizzaStyles = styled.div`
    display: grid;

    @supports not (grid-template-rows: subgrid) {
        --rows: auto auto 1fr;

        grid-template-rows: auto auto 1fr;
    }

    grid-template-rows: var(--rows, subgrid);
    grid-row: span 3;
    grid-gap: 1 rem;

    & h2,
    & p {
        margin: 0;
    }
`;

/* Types */
interface PizzaProps {
    pizza: GatsbyTypes.allSanityPizzaQuery;
}
