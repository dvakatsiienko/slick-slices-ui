/* Components */
import { Pizza } from './Pizza';

/* Instruments */
import * as gql from '../../../graphql-types';
import { pizzaList as pizzaListStyles } from './styles.module.scss';

export const PizzaList: React.FC<PizzaListProps> = props => {
    const pizzaListJSX = props.pizzas.allSanityPizza.nodes.map(pizza => {
        return <Pizza key = { pizza.id } pizza = { pizza } />;
    });

    return <div className = { pizzaListStyles }>{pizzaListJSX}</div>;
};

/* Types */
interface PizzaListProps {
    pizzas: gql.AllSanityPizzaQuery;
}
