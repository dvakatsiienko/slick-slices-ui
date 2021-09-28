/* Core */
import { useState, createContext } from 'react';

export const OrderContext = createContext([]);

export const OrderProvider: React.FC = props => {
    const [ order, setOrder ] = useState([]);

    return (
        <OrderContext.Provider value = { [ order, setOrder ] }>
            {props.children}
        </OrderContext.Provider>
    );
};
