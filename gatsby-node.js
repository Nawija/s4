const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const queryCardsService = await graphql(`
        {
            allDatoCmsUsluga {
                nodes {
                    slug
                }
            }
        }
    `);

    const serviceTemp = path.resolve(`./src/templates/serviceTemp.js`);

    queryCardsService.data.allDatoCmsUsluga.nodes.forEach((node) => {
        const { slug } = node;
        createPage({
            path: slug,
            component: serviceTemp,
            context: {
                slug,
            },
        });
    });
};