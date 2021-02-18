/* Core */
import React from 'react';
import { graphql } from 'gatsby';

/* Components */
import { PizzaList } from '@/components';

const PizzasPage = props => {
    console.log(props.data);

    return (
        <>
            <h1>Pizzas Page...</h1>

            <PizzaList pizzas = { props.data.pizzas.nodes } />
        </>
    );
};

export const query = graphql`
    query allSanityPizza {
        pizzas: allSanityPizza {
            nodes {
                name
                id
                slug {
                    current
                }
                toppings {
                    id
                    name
                }
                image {
                    asset {
                        fluid(maxWidth: 400) {
                            ...GatsbySanityImageFluid
                        }
                    }
                }
            }
        }
    }
`;

export default PizzasPage;
