export const SkeletonGrid: React.FC<SkeletonGridProps> = props => {
    const grid = [ ...Array(props.count).keys() ].map((_, index) => {
        return (
            <div className = 'subgrid-list-item' key = { index }>
                <p>
                    <span className = 'mark'>loading</span>
                </p>
                <img
                    alt = 'loading'
                    className = 'loading'
                    height = '400'
                    src = 'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAECAQAAADsOj3LAAAADklEQVR42mNkgANGQkwAAJoABWH6GPAAAAAASUVORK5CYII='
                    width = '500'
                />
            </div>
        );
    });

    return <div className = 'subgrid-list'>{grid}</div>;
};

/* Types */
interface SkeletonGridProps {
    count: number;
}
