/* Core */
import React from 'react';
import { graphql, PageProps } from 'gatsby';

/* Components */
import { PizzaList } from '@/components';

/* Instruments */
// import * as gql from '../../graphql-types';
// import * as gql from '../__generated__/gatsby-types';
// import * as test from '../graphql/pizzas.gql';
// console.log(test);

const PizzasPage: React.FC<
    PageProps<GatsbyTypes.allSanityPizzaQuery>
> = props => {
    console.log(props.data);

    return (
        <>
            <h1>Pizzas Page...</h1>

            <PizzaList pizzas = { props.data } />
        </>
    );
};

export const query = graphql`
    query allSanityPizza {
        allSanityPizza {
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
                fluid(maxWidth: 400) {
                    ...GatsbySanityImageFluid
                }
            }
        }
    }
`;

export default PizzasPage;
