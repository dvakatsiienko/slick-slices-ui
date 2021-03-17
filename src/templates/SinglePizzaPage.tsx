/* Core */
import React       from 'react';
import { graphql } from 'gatsby';
import Image       from 'gatsby-image';
import styled      from 'styled-components';

/* Components */
import { SEO } from '../components';

export const SinglePizzaPage: React.FC<SinglePizzaPageProps> = props => {
    const { pizza } = props.data;

    const toppingsJSX = pizza.toppings.map(topping => (
        <li key = { topping.id }>{topping.name}</li>
    ));

    return (
        <>
            <SEO image = { pizza.image.asset?.fluid?.src } title = { pizza.name } />

            <PizzaGrid>
                <Image fluid = { pizza.image.asset.fluid } />
                <div>
                    <h2 className = 'mark'>{pizza.name}</h2>
                    <ul>{toppingsJSX}</ul>
                </div>
            </PizzaGrid>
        </>
    );
};

/* Helpers */
const PizzaGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-gap: 2rem;
`;

/* Types */
interface SinglePizzaPageProps {}

const query = graphql`
    query($slug: String!) {
        pizza: sanityPizza(slug: { current: { eq: $slug } }) {
            id
            name
            image {
                asset {
                    fluid(maxWidth: 800) {
                        ...GatsbySanityImageFluid
                    }
                }
            }
            toppings {
                id
                name
                vegetarian
            }
        }
    }
`;

export { SinglePizzaPage as default, query };
