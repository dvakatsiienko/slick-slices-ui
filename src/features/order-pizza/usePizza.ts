/* Core */
import { useState, useContext } from 'react';

/* Components */
import { OrderContext } from '@/components';

/* Instruments */
import * as gql from '@/graphql';
import { calculateOrderTotal, attachNamesAndPrices } from '@/utils';
import * as types from './types';

export const usePizza: UsePizza = pizzaList => {
    const [orderedPizzas, setOrderedPizzas] = useContext(OrderContext);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<string | null>(null);

    const addToOrder: types.AddToOrder = pizzaOrderItem => {
        setOrderedPizzas([...orderedPizzas, pizzaOrderItem]);
    };

    const removeFromOrder: types.RemoveFromOrder = index => {
        setOrderedPizzas([
            ...orderedPizzas.slice(0, index),
            ...orderedPizzas.slice(index + 1),
        ]);
    };

    const submitOrder: types.SubmitOrder = async values => {
        setLoading(true);

        const body = {
            order: attachNamesAndPrices(orderedPizzas, pizzaList),
            total: calculateOrderTotal(orderedPizzas, pizzaList),
            ...values,
        };

        try {
            const response = await fetch('/api/place-order', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });

            const result = await response.json();

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
        orderedPizzas,
        error,
        loading,
        message,
        addToOrder,
        removeFromOrder,
        submitOrder,
    };
};

/* Types */
type UsePizza = (pizzaList: gql.SanityPizzaFragment[]) => {
    orderedPizzas: any;
    error: any;
    loading: boolean;
    message: string;
    addToOrder: types.AddToOrder;
    removeFromOrder: types.RemoveFromOrder;
    submitOrder: types.SubmitOrder;
};
