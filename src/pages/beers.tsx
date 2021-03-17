/* Core */
import React       from 'react';
import { graphql } from 'gatsby';
import styled      from 'styled-components';

/* Components */
import { SEO } from '../components';

const BeersPage = props => {
    const beersJSX = props.data.beers.nodes.map(beer => {
        const rating = Math.round(beer.rating?.average ?? 0);

        return (
            <SingleBeerStyles key = { beer.id }>
                <img alt = { beer.name } src = { beer.image } />
                <h3>{beer.name}</h3>
                {beer.price}
                <p title = { `${rating} out of 5 stars` }>
                    {'⭐'.repeat(rating)}
                    <span style = {{ filter: 'grayscale(100%)' }}>
                        {'⭐'.repeat(5 - rating)}
                    </span>
                    <span>({beer.rating?.reviews})</span>
                </p>
            </SingleBeerStyles>
        );
    });

    return (
        <>
            <SEO
                title = { `Beers! We have ${props.data.beers.nodes.length} in stock` }
            />

            <h2 className = 'center'>
                We have {props.data.beers.nodes.length} Beers Available. Dine in
                Only!
            </h2>
            <BeerGridStyles>{beersJSX}</BeerGridStyles>
        </>
    );
};

/* Styles */
const BeerGridStyles = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
`;

const SingleBeerStyles = styled.div`
    padding: 2rem;
    text-align: center;
    border: 1px solid var(--grey);

    & img {
        display: grid;
        align-items: center;
        width: 100%;
        height: 200px;
        font-size: 10px;
        object-fit: cover;
    }
`;

export const query = graphql`
    query {
        beers: allBeer {
            nodes {
                id
                name
                price
                image
                rating {
                    average
                    reviews
                }
            }
        }
    }
`;

export default BeersPage;
