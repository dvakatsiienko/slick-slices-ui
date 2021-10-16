/* Core */
import { useForm } from 'react-hook-form';

/* Components */
import { Fieldset, Input } from '@/components/Form';
import { PizzaMenu, OrderedPizzaList } from '@/features/order-pizza';

/* Instruments */
import * as gql from '@/graphql';
import { calculateOrderTotal } from '@/utils';
import { usePizza } from '../usePizza';
import { FormShape, resolver } from './resolver';

const __DEV__ = process.env.NODE_ENV === 'development';
const MAIL_USER = process.env.GATSBY_MAIL_USER;

export const OrderPizzaForm: React.FC<OrderPizzaFormProps> = props => {
    const { pizzaList } = props;

    const form = useForm<FormShape>({
        resolver,
        mode:          'all',
        defaultValues: {
            name:  __DEV__ ? 'Ramona' : '',
            email: __DEV__ ? MAIL_USER : '',
        },
    });

    const pizzaControl = usePizza(pizzaList);

    const placeOrder = form.handleSubmit(async (values, event) => {
        event.preventDefault();

        pizzaControl.submitOrder(values);
    });

    if (pizzaControl.message) {
        return <p>{pizzaControl.message}</p>;
    }

    return (
        <form className = 'order-form' onSubmit = { placeOrder }>
            <Fieldset disabled = { pizzaControl.loading }>
                <legend>You Info</legend>

                <Input
                    formState = { form.formState }
                    register = { form.register('name') }
                />
                <Input
                    formState = { form.formState }
                    register = { form.register('email') }
                />
            </Fieldset>

            <fieldset className = 'menu' disabled = { pizzaControl.loading }>
                <legend>Menu</legend>
                <PizzaMenu
                    addToOrder = { pizzaControl.addToOrder }
                    pizzaList = { pizzaList }
                />
            </fieldset>

            <fieldset className = 'order' disabled = { pizzaControl.loading }>
                <legend>Order</legend>
                <OrderedPizzaList
                    orderedPizzas = { pizzaControl.orderedPizzas }
                    pizzaList = { pizzaList }
                    removeFromOrder = { pizzaControl.removeFromOrder }
                />
            </fieldset>

            <fieldset disabled = { pizzaControl.loading }>
                <h3>
                    Your total is{' '}
                    {calculateOrderTotal(pizzaControl.orderedPizzas, pizzaList)}
                </h3>

                <div>
                    {pizzaControl.error ? (
                        <p>Error: {pizzaControl.error}</p>
                    ) : (
                        ''
                    )}
                </div>

                <button disabled = { pizzaControl.loading } type = 'submit'>
                    {pizzaControl.loading ? 'Placing order...' : 'Order Ahead'}
                </button>
            </fieldset>
        </form>
    );
};

/* Types */
interface OrderPizzaFormProps {
    pizzaList: gql.SanityPizzaFragment[];
}
