/* Core */
import { graphql }     from 'gatsby';
import Image           from 'gatsby-image';
import { useForm }     from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup        from 'yup';

/* Components */
import { SEO, PizzaOrder } from '../components';

/* Instruments */
import { OrderFormStyles, MenuItemStyles } from '../styles';
import {
    calculatePizzaPrice,
    formatMoney,
    usePizza,
    calculateOrderTotal
} from '../utils';

const OrderPage = props => {
    const { nodes: pizzas } = props.data.pizzas;

    const form = useForm<FormShape>({
        mode:     'onTouched',
        resolver: yupResolver(schema),
    });

    const pizzaControl = usePizza(pizzas);

    const login = form.handleSubmit((values, event) => {
        event.preventDefault();

        pizzaControl.submitOrder(values);
    });

    const pizzaListJSX = pizzas.map(pizza => {
        return (
            <MenuItemStyles key = { pizza.id }>
                <Image alt = { pizza.name } fluid = { pizza.image.asset.fluid } />
                <div>
                    <h2>{pizza.name}</h2>
                </div>
                <div className = 'controls'>
                    {[ 'S', 'M', 'L' ].map((size, index) => {
                        const addToOrder = () => pizzaControl.addToOrder({
                            id: pizza.id,
                            size,
                        });

                        return (
                            <button
                                key = { index }
                                type = 'button'
                                onClick = { addToOrder }
                            >
                                {size}
                                {formatMoney(
                                    calculatePizzaPrice(pizza.price, size),
                                )}
                            </button>
                        );
                    })}
                </div>
            </MenuItemStyles>
        );
    });

    if (pizzaControl.message) {
        return <p>{pizzaControl.message}</p>;
    }

    return (
        <>
            <SEO title = 'Order a Pizza!' />

            <OrderFormStyles onSubmit = { login }>
                <fieldset disabled = { pizzaControl.loading }>
                    <legend>You Info</legend>
                    <label htmlFor = 'name'>
                        Name {form.errors.name && form.errors.name?.message}
                        <input name = 'name' ref = { form.register() } type = 'text' />
                    </label>
                    <label htmlFor = 'email'>
                        Email {form.errors.email && form.errors.email?.message}
                        <input name = 'email' ref = { form.register() } type = 'text' />
                        <input
                            className = 'mapleSyrup'
                            name = 'mapleSyrup'
                            ref = { form.register() }
                            type = 'text'
                        />
                    </label>
                </fieldset>

                <fieldset className = 'menu' disabled = { pizzaControl.loading }>
                    <legend>Menu</legend>
                    {pizzaListJSX}
                </fieldset>

                <fieldset className = 'order' disabled = { pizzaControl.loading }>
                    <legend>Order</legend>
                    <PizzaOrder
                        order = { pizzaControl.order }
                        pizzas = { pizzas }
                        removeFromOrder = { pizzaControl.removeFromOrder }
                    />
                </fieldset>

                <fieldset disabled = { pizzaControl.loading }>
                    <h3>
                        Your total is{' '}
                        {calculateOrderTotal(pizzaControl.order, pizzas)}
                    </h3>

                    <div>
                        {pizzaControl.error ? (
                            <p>Error: {pizzaControl.error}</p>
                        ) : (
                            ''
                        )}
                    </div>

                    <button disabled = { pizzaControl.loading } type = 'submit'>
                        {pizzaControl.loading
                            ? 'Placing order...'
                            : 'Order Ahead'}
                    </button>
                </fieldset>
            </OrderFormStyles>
        </>
    );
};

/* Helpers */
const schema: yup.SchemaOf<FormShape> = yup.object().shape({
    name:       yup.string().required('is required'),
    email:      yup.string().email('must be valid email').required('is required'),
    mapleSyrup: yup.string(),
});

/* Types */
interface FormShape {
    name: string;
    email: string;
    mapleSyrup: string;
}

export const query = graphql`
    query {
        pizzas: allSanityPizza {
            nodes {
                id
                name
                price
                slug {
                    current
                }
                image {
                    asset {
                        fluid(maxWidth: 100) {
                            ...GatsbySanityImageFluid
                        }
                    }
                }
            }
        }
    }
`;

export default OrderPage;
