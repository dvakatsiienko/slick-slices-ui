/* Core */
import { graphql } from 'gatsby';
import { GatsbyImage, getImage, getSrc } from 'gatsby-plugin-image';

/* Components */
import { SEO } from '../components';

export const SlicemasterPage: React.FC = props => {
    const { person } = props.data;

    const image = getImage(person.image.asset);
    const imageSrc = getSrc(person.image.asset);

    return (
        <>
            <SEO image = { imageSrc } title = { person.name } />

            <div className = 'center'>
                <GatsbyImage alt = { person.name } image = { image } />
                <h2>
                    <span className = 'mark'>{person.name}</span>
                </h2>
                <p>{person.description}</p>
            </div>
        </>
    );
};

export const query = graphql`
    query SanityPerson2($slug: String!) {
        person: sanityPerson(slug: { current: { eq: $slug } }) {
            id
            name
            description
            image {
                asset {
                    gatsbyImageData(placeholder: BLURRED)
                }
            }
        }
    }
`;

export { SlicemasterPage as default };
