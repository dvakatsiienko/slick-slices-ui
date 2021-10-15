/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */

/* Core */
const dotenv = require('dotenv');

dotenv.config({ path: '.env' });
dotenv.config({ path: '.env.local' });

module.exports = {
    siteMetadata: {
        title:       'Slicks Slices',
        siteUrl:     'https://gatsby.pizza',
        description: 'The best pizza in Hamilton!',
        twitter:     '@slicksSlices',
    },
    plugins: [
        'gatsby-plugin-pnpm',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sass',
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        'gatsby-plugin-tsconfig-paths',
        'gatsby-plugin-graphql-codegen',
        // 'gatsby-plugin-typegen',
        {
            resolve: 'gatsby-source-sanity',
            options: {
                projectId: 'zymjgahi',
                dataset:   'production',
                token:     process.env.SANITY_TOKEN,
                watchMode: process.env.NODE_ENV === 'development',
            },
        },
    ],
};
