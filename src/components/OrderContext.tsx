/* Core */
import { useState, createContext } from 'react';

/* Instruments */
import { OrderedPizza } from '@/features/order-pizza/types';

export const OrderContext = createContext<
    [OrderedPizza[], React.Dispatch<React.SetStateAction<OrderedPizza[]>>]
>([ null, null ]);

export const OrderProvider: React.FC = props => {
    const [ orderedPizzas, setOrderedPizzas ] = useState<OrderedPizza[]>([]);

    return (
        <OrderContext.Provider value = { [ orderedPizzas, setOrderedPizzas ] }>
            {props.children}
        </OrderContext.Provider>
    );
};
