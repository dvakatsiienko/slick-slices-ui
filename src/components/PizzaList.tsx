/* Core */
import React from 'react';
import { Link } from 'gatsby';

export const PizzaList: React.FC<PizzaListProps> = props => {
    console.log(props);

    const pizzaListJSX = props.pizzas.map(pizza => {
        return <Pizza key = { pizza.id } pizza = { pizza } />;
    });

    return <div>{pizzaListJSX}</div>;
};

/* Types */
interface PizzaListProps {}

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
interface PizzaProps {}
