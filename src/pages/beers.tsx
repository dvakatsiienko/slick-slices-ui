/* Components */
import { SEO } from '@/components';
import { graphql, PageProps } from 'gatsby';

const BeersPage: React.FC<PageProps> = props => {
    const beersJSX = props.data.beers.nodes.map(beer => {
        const rating = Math.round(beer.rating?.average ?? 0);

        return (
            <div className = 'beer-list-item' key = { beer.id }>
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
            </div>
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

            <div className = 'beer-list'>{beersJSX}</div>
        </>
    );
};

export const query = graphql`
    query AllBeer {
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
