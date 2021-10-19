/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */

/* Core */
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

dotenv.config({ path: '.env' });
dotenv.config({ path: '.env.local' });

const srcDirs = fs.readdirSync(path.resolve(__dirname, 'src'));
const rootDirsConfig = {};

srcDirs.forEach(srcDir => {
    rootDirsConfig[ `@/${srcDir}` ] = path.resolve(__dirname, 'src', srcDir);
});

module.exports = {
    siteMetadata: {
        title:       'Slicks Slices',
        siteUrl:     'https://slickslices.gtsb.io/',
        description: 'The best pizza in Hamilton!',
    },
    plugins: [
        'gatsby-plugin-pnpm',
        'gatsby-plugin-sass',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-plugin-root-import',
            options: rootDirsConfig,
        },
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
