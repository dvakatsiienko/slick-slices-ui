/* Components */
import { HomePageGridStyles }    from '../styles';
import { LoadingGrid, ItemGrid } from '../components';

/* Instruments */
import { useLatestData } from '../utils';

const HomePage = () => {
    const result = useLatestData();

    return (
        <div className = 'center'>
            <h1>The Best Pizza Downtown!</h1>
            <p>Open to 11am Every Single Day</p>

            <HomePageGridStyles>
                <CurrentlySlicing slicemasters = { result.slicemasters } />
                <HotSlices hotSlices = { result.hotSlices } />
            </HomePageGridStyles>
        </div>
    );
};

export const CurrentlySlicing: React.FC = props => {
    const { slicemasters } = props;

    return (
        <div>
            <h2 className = 'center'>
                <span className = 'mark tilt'>Slicemasters On</span>
            </h2>
            <p>Standing by, ready to slice you up!</p>

            {!slicemasters && <LoadingGrid count = { 4 } />}
            {slicemasters && !slicemasters?.length && (
                <p>No one is working right now!</p>
            )}
            {slicemasters?.length && <ItemGrid items = { slicemasters } />}
        </div>
    );
};
export const HotSlices: React.FC = props => {
    const { hotSlices } = props;

    return (
        <div>
            <h2 className = 'center'>
                <span className = 'mark tilt'>Hot Slices</span>
            </h2>
            <p>Come on by, buy the slice!</p>

            {!hotSlices && <LoadingGrid count = { 4 } />}
            {hotSlices && !hotSlices?.length && <p>Nothin' in the Case.</p>}
            {hotSlices?.length && <ItemGrid items = { hotSlices } />}
        </div>
    );
};

export default HomePage;
