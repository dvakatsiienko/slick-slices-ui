/* Core */
import { useState, createContext } from 'react';

import * as React from 'react';

export const OrderContext = createContext([]);

export const OrderProvider: React.FC<OrderProviderProps> = props => {
    const [ order, setOrder ] = useState([]);

    return (
        <OrderContext.Provider value = { [ order, setOrder ] }>
            {props.children}
        </OrderContext.Provider>
    );
};

/* Types */
interface OrderProviderProps {}
