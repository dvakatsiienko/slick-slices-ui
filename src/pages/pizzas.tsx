/* Core */
import * as React             from 'react';
import { graphql, PageProps } from 'gatsby';

/* Components */
import { PizzaList, ToppingsFilter, SEO } from '../components';

const PizzasPage: React.FC<
    PageProps<GatsbyTypes.allSanityPizzaQuery>
> = props => {
    const { topping } = props.pageContext;

    return (
        <>
            <SEO title = { topping ? `Pizzas with ${topping}` : 'All Pizzas' } />

            <ToppingsFilter activeTopping = { topping } />

            <PizzaList pizzas = { props.data } />
        </>
    );
};

export const query = graphql`
    query allSanityPizza($toppingRegex: String) {
        allSanityPizza(
            filter: {
                toppings: { elemMatch: { name: { regex: $toppingRegex } } }
            }
        ) {
            nodes {
                ...testFragment
            }
        }
    }

    fragment testFragment on SanityPizza {
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
                fixed(width: 200, height: 200) {
                    ...GatsbySanityImageFixed
                }
                fluid(maxWidth: 400) {
                    ...GatsbySanityImageFluid
                }
            }
        }
    }
`;

export default PizzasPage;
