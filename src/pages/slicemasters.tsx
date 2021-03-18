/* Core */
import { graphql, Link } from 'gatsby';
import Img               from 'gatsby-image';
import styled            from 'styled-components';

/* Components */
import { Pagination, SEO } from '../components';

const SlicemasterPage = props => {
    const { slicemasters } = props.data;

    const slicemastersJSX = slicemasters.nodes.map(slicemaster => {
        return (
            <SlicemasterStyles key = { slicemaster.id }>
                <Link to = { `/slicemaster/${slicemaster.slug.current}` }>
                    <h2>
                        <span className = 'mark'>{slicemaster.name}</span>
                    </h2>
                </Link>
                <Img fluid = { slicemaster.image.asset.fluid } />
                <p className = 'description'>{slicemaster.description}</p>
            </SlicemasterStyles>
        );
    });

    return (
        <>
            <SEO
                title = { `Slicemasters - Page ${
                    props.pageContext.currentPage || 1
                }` }
            />

            <Pagination
                base = '/slicemasters'
                currentPage = { props.pageContext.currentPage || 1 }
                pageSize = { parseInt(process.env.GATSBY_PAGE_SIZE) }
                skip = { props.pageContext.skip }
                totalCount = { slicemasters.totalCount }
            />
            <SlicemastersGrid>{slicemastersJSX}</SlicemastersGrid>
        </>
    );
};

/* Styles */
const SlicemastersGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 2rem;
`;

const SlicemasterStyles = styled.div`
    & a {
        text-decoration: none;
    }

    & .gatsby-image-wrapper {
        height: 400px;
    }

    & h2 {
        position: relative;
        z-index: 2;
        margin-bottom: -2rem;
        font-size: 4rem;
        text-align: center;
        transform: rotate(-5deg);
    }

    & .description {
        position: relative;
        z-index: 2;
        padding: 1rem;
        margin: 2rem;
        margin-top: -6rem;
        text-align: center;
        background: var(--yellow);
        transform: rotate(1deg);
    }
`;

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
                        fluid(maxWidth: 410) {
                            ...GatsbySanityImageFluid
                        }
                    }
                }
            }
        }
    }
`;

export default SlicemasterPage;
