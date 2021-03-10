/* Core */
const path = require('path');
require('dotenv');

module.exports = {
    siteMetadata: {
        title:       'Slicks Slices',
        siteUrl:     'https://gatsby.pizza',
        description: 'The best pizza in Hamilton!',
    },
    plugins: [
        'gatsby-plugin-styled-components',
        {
            resolve: 'gatsby-plugin-typegen',
            options: {
                emitSchema: {
                    'src/__generated__/gatsby-schema.graphql': true,
                },
            },
        },
        // 'gatsby-plugin-graphql-codegen',
        {
            resolve: 'gatsby-source-sanity',
            options: {
                projectId: 'zymjgahi',
                dataset:   'production',
                watchMode: true,
                token:     process.env.SANITY_TOKEN,
            },
        },
        {
            resolve: 'gatsby-plugin-root-import',
            options: {
                '@/':           path.join(__dirname, 'src'),
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
};
