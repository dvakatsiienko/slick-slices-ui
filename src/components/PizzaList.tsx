/* Core */
import React from 'react';
import { Link } from 'gatsby';

/* Instruments */
// import * as gql from '../../graphql-types';

export const PizzaList: React.FC<PizzaListProps> = props => {
    console.log(props);

    const pizzaListJSX = props.pizzas.allSanityPizza.nodes.map(pizza => {
        return <Pizza key = { pizza.id } pizza = { pizza } />;
    });

    return <div>{pizzaListJSX}</div>;
};

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
        <div>
            <Link to = { `/pizza/${props.pizza.slug.current}` }>
                <h2>
                    <span className = 'mark'>{props.pizza.name}</span>
                </h2>
                <p>{toppingsJSX}</p>
            </Link>
        </div>
    );
};

/* Types */
interface PizzaProps {
    pizza: GatsbyTypes.allSanityPizzaQuery;
}
