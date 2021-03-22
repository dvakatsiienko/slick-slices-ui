/* Components */
import { SkeletonGrid } from './SkeletonGrid';
import { SubgridList }  from './SubgridList';

export const HomePageSubgrid: React.FC<HomePageSubgridProps> = props => {
    const { items } = props;

    return (
        <div>
            <h2 className = 'center'>
                <span className = 'mark tilt'>{props.title}</span>
            </h2>
            <p>{props.cta}</p>

            {!items && <SkeletonGrid count = { 4 } />}
            {items && !items?.length && <p>{props.noDataMessage}</p>}
            {items?.length && <SubgridList items = { items } />}
        </div>
    );
};

/* Types */
interface HomePageSubgridProps {
    items: [];
    title: string;
    cta: string;
    noDataMessage: string;
}
