/* Core */
import { PageProps } from 'gatsby';

/* Components */
import { SEO } from '../components';
import { HomePageSubgrid } from '@/features/home-page';

/* Instruments */
import { useLatestData } from '@/utils';

const HomePage: React.FC<PageProps> = () => {
    const result = useLatestData();

    return (
        <div className = 'center'>
            <SEO title = 'Slick Slices' />

            <h1>The Best Pizza Downtown 🍕</h1>
            <p>Open to 11am Every Single Day</p>

            <section className = 'home-layout'>
                <HomePageSubgrid
                    cta = 'Standing by, ready to slice you up!'
                    items = { result.slicemasters }
                    noDataMessage = 'No one is working right now!'
                    title = 'Slicemasters On'
                />
                <HomePageSubgrid
                    cta = 'Come on by, buy the slice!'
                    items = { result.hotSlices }
                    noDataMessage = "Nothin' in the Case."
                    title = 'Hot Slices'
                />
            </section>
        </div>
    );
};

export default HomePage;
