/* Core */
import { Link } from 'gatsby';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';

/* Instruments */
import * as gql from '@/graphql';
import { pizza as pizzaStyles } from './styles.module.scss';

export const Pizza: React.FC<PizzaProps> = props => {
    const toppingsJSX = props.pizza.toppings
        .map(topping => {
            return topping.name;
        })
        .join(', ');

    const image = getImage(props.pizza.image.asset as unknown as ImageDataLike);

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

/* Types */
interface PizzaProps {
    pizza: gql.SanityPizzaFragment;
}
