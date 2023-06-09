/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
    pathPrefix: "/s4",
    siteMetadata: {
        title: ``,
        description: ``,
        author: `Seovileo`,
        siteUrl: `https://seovileo.pl/`,
    },
    plugins: [
        {
            resolve: `gatsby-transformer-remark`,
            options: {},
        },
        {
            resolve: `gatsby-source-datocms`,
            options: {
                apiToken: `0e6621bdd35bb44a65efb5a356263a`,
                environment: `main`,
                previewMode: false,
                disableLiveReload: false,
                pageSize: 500,
            },
        },
        "gatsby-plugin-postcss",
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src`,
            },
        },
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                defaults: {
                    formats: [`auto`, `webp`],
                    placeholder: `none`,
                    breakpoints: [450, 768, 1024, 2000],
                    backgroundColor: `transparent`,
                },
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Seovileo`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#0C0904`,
                theme_color: `#0C0904`,
                display: `fullscreen`,
                icon: `src/images/favicon.png`,
            },
        },
    ],
};
