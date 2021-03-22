/* Core */
import { Link }                  from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import {
    pizzaList as pizzaListStyles,
    pizza as pizzaStyles
} from './styles.module.scss';

export const PizzaList: React.FC = props => {
    const pizzaListJSX = props.pizzas.allSanityPizza.nodes.map(pizza => {
        return <Pizza key = { pizza.id } pizza = { pizza } />;
    });

    return <div className = { pizzaListStyles }>{pizzaListJSX}</div>;
};

export const Pizza: React.FC = props => {
    const toppingsJSX = props.pizza.toppings
        .map(topping => {
            return topping.name;
        })
        .join(', ');

    const image = getImage(props.pizza.image.asset);

    return (
        <div className = { pizzaStyles }>
            <h2>
                <Link to = { `/pizza/${props.pizza.slug.current}` }>
                    <span className = 'mark'>{props.pizza.name}</span>
                </Link>
            </h2>
            <p>{toppingsJSX}</p>
            <GatsbyImage alt = { props.pizza.name } image = { image } />
        </div>
    );
};
