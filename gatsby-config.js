/* Core */
const path = require( 'path');
const dotenv = require('dotenv');

dotenv.config({
    path: '.env',
})

console.log(process.env.GATSBY_SANITY_ENV);

module.exports = {
    siteMetadata: {
        title:       'Slicks Slices',
        siteUrl:     'https://gatsby.pizza',
        description: 'The best pizza in Hamilton!',
    },
    plugins: [
        'gatsby-plugin-styled-components',
        // {
        //     resolve: 'gatsby-source-sanity',
        //     options: {
        //         projectId: 'zymjgahi',
        //         dataset:   'production',
        //         watchMode: true,
        //         token:     process.env.GATSBY_SANITY_ENV,
        //     },
        // },
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