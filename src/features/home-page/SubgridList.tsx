export const SubgridList: React.FC<SubgridListProps> = props => {
    const itemListJSX = props.items.map(item => {
        return (
            <div className = 'subgrid-list-item' key = { item._id }>
                <p>
                    <span className = 'mark'>{item.name}</span>
                </p>
                <img
                    alt = { item.name }
                    height = '400'
                    src = { `${item.image.asset.url}?w=500&h=400&fit=crop` }
                    style = {{
                        background:     `url(${item.image.asset.metadata.lqip})`,
                        backgroundSize: 'cover',
                    }}
                    width = '500'
                />
            </div>
        );
    });

    return <div className = 'subgrid-list'>{itemListJSX}</div>;
};

/* Types */
interface SubgridListProps {
    items: [];
}
