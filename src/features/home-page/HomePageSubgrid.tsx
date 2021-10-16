/* Core */
import { useState, useEffect } from 'react';
import waait from 'waait';

/* Components */
import { SkeletonGrid } from './SkeletonGrid';
import { SubgridList } from './SubgridList';

/* Instruments */
import * as gql from '@/graphql';

export const HomePageSubgrid: React.FC<HomePageSubgridProps> = props => {
    const [isFetched, setIsFetched] = useState(false);

    useEffect(() => {
        (async () => {
            await waait(1000);
            setIsFetched(true);
        })();
    }, []);

    const { items } = props;

    return (
        <div>
            <h2 className="center">
                <span className="mark tilt">{props.title}</span>
            </h2>
            <p>{props.cta}</p>

            {!isFetched && <SkeletonGrid count={4} />}
            {items && !items?.length && <p>{props.noDataMessage}</p>}
            {isFetched && items?.length && <SubgridList items={items} />}
        </div>
    );
};

/* Types */
interface HomePageSubgridProps {
    items: gql.SlicemasterFragment[] | gql.HotSliceFragment[];
    title: string;
    cta: string;
    noDataMessage: string;
}
