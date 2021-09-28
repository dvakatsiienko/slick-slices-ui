/* Core */
import { useState, useContext } from 'react';

/* Components */
import { OrderContext } from '../components';

/* Instruments */
import { calculateOrderTotal } from './calculateOrderTotal';
import { attachNamesAndPrices } from './attachNamesAndPrices';

export const usePizza = pizzas => {
    const [ order, setOrder ] = useContext(OrderContext);
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(false);
    const [ message, setMessage ] = useState(null);

    const addToOrder = orderedPizza => {
        setOrder([ ...order, orderedPizza ]);
    };

    const removeFromOrder = index => {
        setOrder([ ...order.slice(0, index), ...order.slice(index + 1) ]);
    };

    const submitOrder = async values => {
        setLoading(true);

        const body = {
            order: attachNamesAndPrices(order, pizzas),
            total: calculateOrderTotal(order, pizzas),
            ...values,
        };

        console.log(process.env.GATSBY_NETLIFY_SERVERLESS_URL);
        console.log(`${process.env.GATSBY_NETLIFY_SERVERLESS_URL}/place-order`);

        try {
            const response = await fetch('/api/place-order', {
                method:  'POST',
                headers: { 'Content-Type': 'application/json' },
                body:    JSON.stringify(body),
            });

            const res = await response.json();

            console.log('response', response);
            console.log('res', res);

            const result = JSON.parse(await response.text());

            if (response.status >= 400 && response.status < 600) {
                setError(result.message);
                setMessage(null);
            } else {
                setError(null);
                setMessage('Success! Come on down for your Pizza!');
            }
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    return {
        order,
        error,
        loading,
        message,
        addToOrder,
        removeFromOrder,
        submitOrder,
    };
};
