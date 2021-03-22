/* Core */
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

/* Components */
import { Pagination, SEO } from '../components';

const SlicemasterPage = props => {
    const { slicemasters } = props.data;

    const slicemastersJSX = slicemasters.nodes.map(slicemaster => {
        const image = getImage(slicemaster.image.asset);

        return (
            <div className="slicemaster" key={slicemaster.id}>
                <Link to={`/slicemaster/${slicemaster.slug.current}`}>
                    <h2>
                        <span className="mark">{slicemaster.name}</span>
                    </h2>
                </Link>
                <GatsbyImage alt={slicemasters.name ?? ''} image={image} />
                <p className="description">{slicemaster.description}</p>
            </div>
        );
    });

    return (
        <>
            <SEO
                title={`Slicemasters - Page ${
                    props.pageContext.currentPage || 1
                }`}
            />

            <Pagination
                base="/slicemasters"
                currentPage={props.pageContext.currentPage || 1}
                pageSize={parseInt(process.env.GATSBY_PAGE_SIZE)}
                skip={props.pageContext.skip}
                totalCount={slicemasters.totalCount}
            />
            <div className="slicemasters-layout">{slicemastersJSX}</div>
        </>
    );
};

export const query = graphql`
    query($skip: Int = 0, $pageSize: Int = 4) {
        slicemasters: allSanityPerson(skip: $skip, limit: $pageSize) {
            totalCount
            nodes {
                id
                name
                description
                slug {
                    current
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

export default SlicemasterPage;
