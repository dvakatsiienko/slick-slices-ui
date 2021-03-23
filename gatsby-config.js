/* Core */
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: '../.env' });

module.exports = {
    siteMetadata: {
        title:       'Slicks Slices',
        siteUrl:     'https://gatsby.pizza',
        description: 'The best pizza in Hamilton!',
        twitter:     '@slicksSlices',
    },
    plugins: [
        'gatsby-plugin-graphql-config',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sass',
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-sanity',
            options: {
                projectId: 'zymjgahi',
                dataset:   'production',
                token:     process.env.SANITY_TOKEN,
                watchMode: process.env.NODE_ENV === 'development',
            },
        },
        {
            // ? Better import statements
            resolve: 'gatsby-plugin-root-import',
            options: {
                '@/':           path.join(__dirname, 'src'),
                '@/components': path.join(__dirname, 'src/components'),
                '@/features':   path.join(__dirname, 'src/features'),
                '@/utils':      path.join(__dirname, 'src/utils'),

                // "layouts": path.join(__dirname, "src/layouts"),
                // "templates": path.join(__dirname, "src/templates"),
                // "scss": path.join(__dirname, "src/scss"),
                // "types": path.join(__dirname, "src/types"),
                // "src": path.join(__dirname, 'src'),
                // "pages": path.join(__dirname, 'src/pages')
            },
            // ? TS support
            // {
            //     resolve: 'gatsby-plugin-typegen',
            //     options: {
            //         emitSchema: {
            //             'src/__generated__/gatsby-schema.graphql': true,
            //         },
            //     },
            // },
            // 'gatsby-plugin-graphql-codegen',
        },
    ],
};
