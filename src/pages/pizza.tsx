/* Core */
import { graphql, PageProps } from 'gatsby';

/* Components */
import { SEO, ToppingsFilter, PizzaList } from '@/components';

/* Instruments */
import * as gql from '@/graphql';

const PizzaPage: PizzaPageProps = props => {
    const { topping } = props.pageContext;

    const title = topping ? `Pizzas with ${topping}` : 'All Pizzas';

    return (
        <>
            <SEO title = { title } />

            <ToppingsFilter />

            <PizzaList pizzas = { props.data } />
        </>
    );
};

export const query = graphql`
    query AllSanityPizzaFilter($toppingRegex: String) {
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
        price
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
    PageProps<gql.AllSanityPizzaFilterQuery, PizzasPageContext>
>;
interface PizzasPageContext {
    topping: string;
}

export default PizzaPage;
