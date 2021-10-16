/* Core */
import { graphql, PageProps } from 'gatsby';

/* Components */
import { PizzaList, ToppingsFilter, SEO } from '../components';

/* Instruments */
import * as gql from '@/graphql';

const PizzaPage: PizzaPageProps = props => {
    const { topping } = props.pageContext;

    const title = topping ? `Pizzas with ${topping}` : 'All Pizzas';

    return (
        <>
            <SEO title={title} />

            <ToppingsFilter />

            <PizzaList pizzas={props.data} />
        </>
    );
};

export const query = graphql`
    query AllSanityPizza($toppingRegex: String) {
        allSanityPizza(
            filter: {
                toppings: { elemMatch: { name: { regex: $toppingRegex } } }
            }
        ) {
            nodes {
                ...SanityPizzaFragment
            }
        }
    }

    fragment SanityPizzaFragment on SanityPizza {
        id
        name
        slug {
            current
        }
        toppings {
            id
            name
        }
        image {
            asset {
                gatsbyImageData(placeholder: BLURRED)
            }
        }
    }
`;

/* Types */
type PizzaPageProps = React.FC<
    PageProps<gql.AllSanityPizzaQuery, PizzasPageContext>
>;
interface PizzasPageContext {
    topping: string;
}

export default PizzaPage;
