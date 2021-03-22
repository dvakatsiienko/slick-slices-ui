/* Core */
import { graphql, PageProps } from 'gatsby';

/* Components */
import { PizzaList, ToppingsFilter, SEO } from '../components';

const PizzasPage: React.FC<PageProps> = props => {
    const { topping } = props.pageContext;

    return (
        <>
            <SEO title={topping ? `Pizzas with ${topping}` : 'All Pizzas'} />

            <ToppingsFilter />

            <PizzaList pizzas={props.data} />
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
        }
    }
`;

export default PizzasPage;
