/* Core */
import React from 'react';

/* Components */
import { Layout } from './src/components';

export const wrapPageElement = args => {
    const {element, props} = args

    return <Layout { ...props }>{element}</Layout>

}