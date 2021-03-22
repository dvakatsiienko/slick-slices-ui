/* Core */
import { graphql }               from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

/* Components */
import { SEO } from '../components';

/* Instruments */
import { pizzaView as pizzaViewStyles } from '../components/PizzaList/styles.module.scss';

export const SinglePizzaPage: React.FC = props => {
    const { pizza } = props.data;

    const toppingsJSX = pizza.toppings.map(topping => (
        <li key = { topping.id }>{topping.name}</li>
    ));

    const image = getImage(pizza.image.asset);

    return (
        <>
            <SEO image = { pizza.image.asset?.fluid?.src } title = { pizza.name } />

            <div className = { pizzaViewStyles }>
                <GatsbyImage alt = { pizza.name } image = { image } />
                <div>
                    <h2 className = 'mark'>{pizza.name}</h2>
                    <ul>{toppingsJSX}</ul>
                </div>
            </div>
        </>
    );
};

const query = graphql`
    query($slug: String!) {
        pizza: sanityPizza(slug: { current: { eq: $slug } }) {
            id
            name
            image {
                asset {
                    gatsbyImageData(placeholder: BLURRED)
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
