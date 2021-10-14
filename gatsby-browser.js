/* Core */
import React from 'react';
import { Layout, OrderProvider } from './src/components';

/* Instruments */
import './src/theme/main.scss';

export const wrapPageElement = args => {
    const { element, props } = args;

    return <Layout { ...props }>{element}</Layout>;
};

export const wrapRootElement = args => {
    return <OrderProvider>{args.element}</OrderProvider>;
};
