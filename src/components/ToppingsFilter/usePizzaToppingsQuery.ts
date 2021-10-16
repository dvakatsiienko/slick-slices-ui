/* Core */
import { useStaticQuery, graphql } from 'gatsby';

/* Instruments */
import '@/graphql';

export const usePizzaToppingsQuery = () => {
    const pizzaToppingsQuery = useStaticQuery<gql.PizzaToppingsQuery>(
        graphql`
            query PizzaToppings {
                pizzaToppings: allSanityPizza {
                    nodes {
                        id
                        name
                        toppings {
                            ...ToppingFragment
                        }
                    }
                }
            }

            fragment ToppingFragment on SanityTopping {
                id
                name
                vegetarian
            }
        `,
    );

    return pizzaToppingsQuery;
};
