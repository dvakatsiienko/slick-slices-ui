/* Core */
import { graphql, PageProps } from 'gatsby';

/* Components */
import { SEO } from '@/components';
import { HomePageSubgrid } from '@/features/home-page';

/* Instruments */
import * as gql from '@/graphql';

const HomePage: HomePageProps = props => {
    return (
        <div className = 'center'>
            <SEO title = 'Slick Slices' />

            <h1>The Best Pizza Downtown 🍕</h1>
            <p>Open to 11am Every Single Day</p>

            <section className = 'home-layout'>
                <HomePageSubgrid
                    cta = 'Standing by, ready to slice you up!'
                    items = { props.data.sanityStoreSettings.slicemaster }
                    noDataMessage = 'No one is working right now!'
                    title = 'Slicemasters On'
                />
                <HomePageSubgrid
                    cta = 'Come on by, buy the slice!'
                    items = { props.data.sanityStoreSettings.hotSlices }
                    noDataMessage = "Nothin' in the Case."
                    title = 'Hot Slices'
                />
            </section>
        </div>
    );
};

export const query = graphql`
    query SanityStoreSettings {
        sanityStoreSettings(name: { eq: "Downtown Store" }) {
            name
            slicemaster {
                ...SlicemasterFragment
            }
            hotSlices {
                ...HotSliceFragment
            }
        }
    }

    fragment SlicemasterFragment on SanityPerson {
        _id
        name
        image {
            asset {
                url
                metadata {
                    lqip
                }
            }
        }
    }

    fragment HotSliceFragment on SanityPizza {
        _id
        price
        slug {
            _key
            _type
            current
        }
        name
        image {
            asset {
                url
                metadata {
                    lqip
                }
            }
        }
    }
`;

/* Types */
type HomePageProps = React.FC<PageProps<gql.SanityStoreSettingsQuery>>;

export default HomePage;
