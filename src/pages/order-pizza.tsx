/* Core */
import { graphql, PageProps } from 'gatsby';

/* Components */
import { SEO } from '@/components';
import { OrderPizzaForm } from '@/features/order-pizza';

/* Instruments */
import * as gql from '@/graphql';

const OrderPizzaPage: OrderPizzaPageProps = props => {
    const { nodes: pizzaList } = props.data.allSanityPizza;

    return (
        <>
            <SEO title = 'Order a Pizza!' />

            <OrderPizzaForm pizzaList = { pizzaList } />
        </>
    );
};

export const query = graphql`
    query AllSanityPizza {
        allSanityPizza {
            nodes {
                ...SanityPizzaFragment
            }
        }
    }
`;

/* Types */
type OrderPizzaPageProps = React.FC<PageProps<gql.AllSanityPizzaQuery>>;

export default OrderPizzaPage;
