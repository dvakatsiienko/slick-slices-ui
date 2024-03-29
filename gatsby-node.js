/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */

/* Core */
const path = require('path');
const fetch = require('isomorphic-fetch');

exports.createPages = async params => {
    await Promise.all([
        turnPizzasIntoPages(params),
        turnToppingsIntoPages(params),
        turnSlicemastersIntoPages(params),
    ]);
};

exports.sourceNodes = async params => {
    await Promise.all([ fetchBeersAndTurnIntoNodes(params) ]);
};

/* Helpers */
async function turnPizzasIntoPages(params) {
    const { graphql, actions } = params;

    const SinglePizzaPage = path.resolve('./src/templates/SinglePizzaPage.tsx');

    const result = await graphql(`
        query AllSanityPizzaGatsbyNode {
            pizzas: allSanityPizza {
                nodes {
                    name
                    slug {
                        current
                    }
                }
            }
        }
    `);

    const { data } = result;

    data.pizzas.nodes.forEach(pizza => {
        actions.createPage({
            path:      `pizza/${pizza.slug.current.toLowerCase()}`,
            component: SinglePizzaPage,
            context:   {
                slug: pizza.slug.current,
            },
        });
    });
}

async function turnToppingsIntoPages(params) {
    const { graphql, actions } = params;

    const toppingPage = path.resolve('./src/pages/pizza.tsx');

    const result = await graphql(`
        query AllSanityToppingGatsbyNode {
            allSanityTopping {
                nodes {
                    id
                    name
                }
            }
        }
    `);

    const { data } = result;

    data.allSanityTopping.nodes.forEach(topping => {
        const toppingName = topping.name.toLowerCase();

        actions.createPage({
            path:      `topping/${toppingName}`,
            component: toppingPage,
            context:   {
                topping:      toppingName,
                toppingRegex: `/${topping.name}/i`,
            },
        });
    });
}

async function fetchBeersAndTurnIntoNodes(params) {
    const { actions, createNodeId, createContentDigest } = params;

    // TODO: https://api.sampleapis.com/beers/graphql
    const response = await fetch('https://api.sampleapis.com/beers/ale');
    const beers = await response.json();

    for (const beer of beers) {
        if (typeof beer.rating === 'string') {
            continue; // eslint-disable-line no-continue
        }

        const nodeMeta = {
            id:       createNodeId(`beer-${beer.name}`),
            parent:   null,
            children: [],
            internal: {
                type:          'Beer',
                mediaType:     'application/json',
                contentDigest: createContentDigest(beer),
            },
        };

        actions.createNode({
            ...beer,
            ...nodeMeta,
        });
    }
}

async function turnSlicemastersIntoPages(params) {
    const { graphql, actions } = params;

    const { data } = await graphql(`
        query AllSanityPersonGatsbyNode {
            slicemasters: allSanityPerson {
                totalCount
                nodes {
                    id
                    name
                    slug {
                        current
                    }
                }
            }
        }
    `);

    data.slicemasters.nodes.forEach(slicemaster => {
        actions.createPage({
            component: path.resolve('./src/templates/SlicemasterPage.tsx'),
            path:      `/slicemaster/${slicemaster.slug.current}`,

            context: {
                name: slicemaster.person,
                slug: slicemaster.slug.current,
            },
        });
    });

    const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE);
    const pageCount = Math.ceil(data.slicemasters.totalCount / pageSize);

    Array.from({ length: pageCount }).forEach((_, index) => {
        actions.createPage({
            path:      `/slicemasters/${index + 1}`,
            component: path.resolve('./src/pages/slicemasters.tsx'),
            context:   {
                skip:        index * pageSize,
                currentPage: index + 1,
                pageSize,
            },
        });
    });
}

/* Extending webpack config */
exports.onCreateWebpackConfig = api => {
    api.actions.setWebpackConfig({
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
            },
        },
    });
};
