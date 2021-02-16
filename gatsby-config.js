const path = require('path')

module.exports = {
    plugins: [
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