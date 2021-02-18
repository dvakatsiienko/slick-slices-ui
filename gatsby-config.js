// const path = require('path')
/* Core */
import path  from 'path';

export default {
    siteMetadata: {
        title:       'Slicks Slices',
        siteUrl:     'https://gatsby.pizza',
        description: 'The best pizza in Hamilton!',
    },
    plugins: [
        'gatsby-plugin-styled-components',
        {
            resolve: 'gatsby-plugin-root-import',
            options: {
                '@/components': path.join(__dirname, 'src/components'),
                // "layouts": path.join(__dirname, "src/layouts"),
                // "templates": path.join(__dirname, "src/templates"),
                // "scss": path.join(__dirname, "src/scss"),
                // "types": path.join(__dirname, "src/types"),
                // "src": path.join(__dirname, 'src'),
                // "pages": path.join(__dirname, 'src/pages')
            },
        },
    ],
}